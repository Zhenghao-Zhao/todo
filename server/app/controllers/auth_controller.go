package controllers

import (
	"fmt"
	"net/http"

	"github.com/zhenghao-zhao/todo/app/models"
	"github.com/zhenghao-zhao/todo/app/utils/api"
	"github.com/zhenghao-zhao/todo/app/utils/auth"
)

// func (s *Server) DoPreLogin() http.HandlerFunc {
// 	return func(w http.ResponseWriter, r *http.Request) {
// 		email := r.FormValue("email")
//
// 	}
// }

func (s *Server) DoLogin() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("is logged in", auth.IsLoggedIn(r))
		if auth.IsLoggedIn(r) {
			api.OKResponse(w)
			return
		}

		email := r.FormValue("email")
		password := r.FormValue("password")

		var user *models.User
		var error error

		user, error = models.FindUserByEmail(s.DB, email)

		if error != nil || !auth.ComparePassword(password, user.Password) {
			api.ErrorResponse(w, "Incorrect email or password", http.StatusBadRequest)
			return
		}

		error = auth.CreateUserSession(w, r, user.UID.String())
		if error != nil {
			api.ErrorResponse(w, error.Error(), http.StatusBadRequest)
			return
		}
		api.OKResponse(w)
	}
}

func (s *Server) DoRegister() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		email := r.FormValue("email")
		password := r.FormValue("password")
		firstName := r.FormValue("firstName")
		lastName := r.FormValue("lastName")

		if email == "" || password == "" || firstName == "" || lastName == "" {
			api.ErrorResponse(w, "Email, pasword, first name and last name must not be empty", http.StatusBadRequest)
			return
		}

		var err error
		var hashedPassword string

		hashedPassword, err = auth.GeneratePassword(password)
		if err != nil {
			api.ErrorResponse(w, err.Error(), http.StatusInternalServerError)
			return
		}
		userModel := models.User{}
		userModel.Email = email
		userModel.Password = hashedPassword
		userModel.FirstName = firstName
		userModel.LastName = lastName

		err = models.CreateUser(s.DB, &userModel)
		if err != nil {
			api.ErrorResponse(w, err.Error(), http.StatusInternalServerError)
			return
		}

		err = auth.CreateUserSession(w, r, userModel.UID.String())
		if err != nil {
			api.ErrorResponse(w, err.Error(), http.StatusInternalServerError)
			return
		}

		api.OKResponse(w)
	}
}

func (s *Server) DoLogout() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		err := auth.RemoveUserSession(w, r)
		if err != nil {
			api.ErrorResponse(w, err.Error(), http.StatusInternalServerError)
			return
		}

		api.OKResponse(w)
	}
}
