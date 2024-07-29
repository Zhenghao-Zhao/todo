package controllers

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

type Server struct {
	*gorm.DB
	*mux.Router
	*AppConfig
	*DBConfig
}

type AppConfig struct {
	Port string
}

type DBConfig struct {
	Host     string
	User     string
	Password string
	DBName   string
	Port     string
	SSLMode  string
	TimeZone string
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
	s.DBConfig.Host = getEnv("DBHost", "localhost")
	s.DBConfig.User = getEnv("DBUser", "zhaozhenghao")
	s.DBConfig.Password = getEnv("DBPassword", "zhaozhenghao")
	s.DBConfig.DBName = getEnv("DBName", "zhaozhenghao")
	s.DBConfig.SSLMode = getEnv("DBSSLMode", "diable")
	s.DBConfig.TimeZone = getEnv("DBTimeZone", "Asia/Shanghai")

	s.AppConfig.Port = getEnv("AppPort", "8080")
	s.initRoutes()
}

func (s *Server) Run() {
	http.ListenAndServe(s.AppConfig.Port, s.Router)
}
