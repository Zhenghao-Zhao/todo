package main

import (
	"encoding/gob"
	"log"
	"os"

	"github.com/google/uuid"
	"github.com/zhenghao-zhao/todo/app/controllers"
)

func init() {
	gob.Register(uuid.UUID{})
}

func main() {
	secretKey := os.Getenv("SESSION_KEY")
	if secretKey == "" {
		log.Fatal("session key not found")
	}
	server := controllers.Server{}
	server.Initialize()
	server.Run()
}
