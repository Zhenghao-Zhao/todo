package controllers

import (
	"log"
	"net/http"

	"github.com/zhenghao-zhao/todo/app/models"
)

func (s *Server) Login() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
	}
}

func (s *Server) DoLogin() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// email := r.FormValue("email")
		// password := r.FormValue("password")
	}
}

func (s *Server) Register() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
	}
}

func (s *Server) DoRegister() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		email := r.FormValue("email")
		password := r.FormValue("password")
		firstName := r.FormValue("firstName")
		lastName := r.FormValue("lastName")

		userModel := models.User{}
		userModel.Email = email
		userModel.Password = password
		userModel.FirstName = firstName
		userModel.LastName = lastName

		err := models.CreateUser(s.DB, &userModel)
		if err != nil {
			log.Fatal(err)
			apiError := ApiError{Message: err.Error(), Code: http.StatusInternalServerError}
			JSONError(w, &apiError)
			return
		}

		resp := Response{
			Message: "Success",
			Status:  http.StatusOK,
		}
		JSONResponse(w, &resp)
	}
}

func (s *Server) DoLogout() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
	}
}
