package controllers

import (
	"github.com/gorilla/mux"
	"github.com/zhenghao-zhao/todo/app/middlewares"
)

func (s *Server) initRoutes() {
	s.Router = mux.NewRouter()
	s.HandleFunc("/", s.Home()).Methods("GET")
	s.HandleFunc("/login", s.DoLogin()).Methods("POST")
	s.HandleFunc("/registration", s.DoRegister()).Methods("POST")
	s.HandleFunc("/logout", middlewares.AuthMiddleware(s.DoLogout())).Methods("POST")
	s.HandleFunc("/foo", middlewares.AuthMiddleware(s.Foo())).Methods("GET")
}
