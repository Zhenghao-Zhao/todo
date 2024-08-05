package controllers

import (
	"net/http"

	"github.com/zhenghao-zhao/todo/app/utils/api"
)

func (s *Server) Foo() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		resp := api.Payload{
			Message: "Success",
			Status:  http.StatusOK,
		}
		api.JSONResponse(w, &resp)
	}
}
