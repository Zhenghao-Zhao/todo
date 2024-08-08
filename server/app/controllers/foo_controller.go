package controllers

import (
	"net/http"

	"github.com/zhenghao-zhao/todo/app/utils/api"
)

func (s *Server) Foo() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		api.OKResponse(w)
	}
}
