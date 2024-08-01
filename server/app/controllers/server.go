package controllers

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
	"github.com/zhenghao-zhao/todo/app/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Server struct {
	*gorm.DB
	*mux.Router
	*AppConfig
	*DBConfig
}

type AppConfig struct {
	AppPort string
}

type DBConfig struct {
	DBHost     string
	DBUser     string
	DBPassword string
	DBName     string
	DBPort     string
	DBSSLMode  string
	DBTimeZone string
}

func getEnv(name, fallback string) string {
	value, exists := os.LookupEnv(name)
	if !exists {
		return fallback
	}

	return value
}

func (s *Server) Initialize() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file, using alternatives instead...")
	}
	s.DBHost = getEnv("DBHost", "localhost")
	s.DBUser = getEnv("DBUser", "zhaozhenghao")
	s.DBPassword = getEnv("DBPassword", "zhaozhenghao")
	s.DBName = getEnv("DBName", "zhaozhenghao")
	s.DBPort = getEnv("DBPort", "5432")
	s.DBSSLMode = getEnv("DBSSLMode", "diable")
	s.DBTimeZone = getEnv("DBTimeZone", "Asia/Shanghai")

	s.AppPort = getEnv("AppPort", "8080")
	s.initRoutes()
	s.initDB()
}

func (s *Server) migrateDB() {
	var err error
	for _, m := range models.GetModels() {
		err = s.AutoMigrate(m)
		if err != nil {
			log.Fatal(err)
		}
	}
}

func (s *Server) initDB() {
	var err error
	dsn := fmt.Sprintf("host=%v user=%v password=%v dbname=%v port=%v sslmode=%v TimeZone=%v", s.DBHost, s.DBUser, s.DBPassword, s.DBName, s.DBPort, s.DBSSLMode, s.DBTimeZone)
	s.DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("failed to connect database")
	}
	s.migrateDB()
}

func (s *Server) Run() {
	handler := cors.Default().Handler(s.Router)
	fmt.Printf("Started server at port %v\n", s.AppPort)
	log.Fatal(http.ListenAndServe(":"+s.AppPort, handler))
}
