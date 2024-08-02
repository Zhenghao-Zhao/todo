package main

import (
	"log"
	"os"

	"github.com/zhenghao-zhao/todo/app/controllers"
)

func main() {
	secretKey := os.Getenv("SESSION_KEY")
	if secretKey == "" {
		log.Fatal("session key not found")
	}
	server := controllers.Server{}
	server.Initialize()
	server.Run()
}
