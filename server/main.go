package main

import (
	"github.com/zhenghao-zhao/todo/app/controllers"
)

func main() {
	server := controllers.Server{}
	server.AppConfig = &controllers.AppConfig{}
	server.DBConfig = &controllers.DBConfig{}
	server.Initialize()
	server.Run()
}
