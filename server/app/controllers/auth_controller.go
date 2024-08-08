package controllers

import (
	"net/http"

	"github.com/google/uuid"
	"github.com/zhenghao-zhao/todo/app/models"
	"github.com/zhenghao-zhao/todo/app/utils/api"
	"github.com/zhenghao-zhao/todo/app/utils/auth"
)

func (s *Server) DoLogin() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
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

		error = auth.CreateUserSession(w, r, user)
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

		err = auth.CreateUserSession(w, r, &userModel)
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

func (s *Server) CheckEmail() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		email := r.FormValue("email")
		exists, err := models.CheckEmailExists(s.DB, email)
		if err != nil {
			api.ErrorResponse(w, err.Error(), http.StatusInternalServerError)
			return
		}

		response := struct {
			Exists  bool   `json:"exists"`
			Message string `json:"message"`
		}{
			Exists:  exists,
			Message: "The email doesn't belong to any account",
		}

		api.JSONResponse(w, response, 200)
	}
}

func (s *Server) CheckAuth() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		session, err := auth.GetCurrentUserSession(r)
		if err != nil {
			api.ErrorResponse(w, err.Error(), http.StatusInternalServerError)
			return
		}

		loggedIn, ok := auth.GetSessionValue[bool](session, "logged_in")
		if !loggedIn || !ok {
			api.ErrorResponse(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		firstName, ok := auth.GetSessionValue[string](session, "firstName")
		if !ok {
			api.ErrorResponse(w, "", http.StatusInternalServerError)
			return
		}

		lastName, ok := auth.GetSessionValue[string](session, "lastName")
		if !ok {
			api.ErrorResponse(w, "", http.StatusInternalServerError)
			return
		}

		uid, ok := auth.GetSessionValue[uuid.UUID](session, "user_id")
		if !ok {
			api.ErrorResponse(w, "", http.StatusInternalServerError)
			return
		}

		response := struct {
			FirstName string    `json:"firstName"`
			LastName  string    `json:"lastName"`
			UID       uuid.UUID `json:"userID"`
		}{
			FirstName: firstName,
			LastName:  lastName,
			UID:       uid,
		}

		api.JSONResponse(w, response, 200)
	}
}
