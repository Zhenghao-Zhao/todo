package main

import (
	"net/http"

	"github.com/zhenghao-zhao/todo/app/controllers"
)

func main() {
	server := controllers.Server{}
	server.Initialize()
}
