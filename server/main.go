package main

import (
	"net/http"

	"todo/api"
)

func main() {
	server := api.NewServer()
	http.ListenAndServe(":8080", server)
}
