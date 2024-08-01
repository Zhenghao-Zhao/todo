package controllers

import (
	"net/http"
)

func (s *Server) Foo() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		resp := Response{
			Message: "Success",
			Status:  http.StatusOK,
		}
		JSONResponse(w, &resp)
	}
}
