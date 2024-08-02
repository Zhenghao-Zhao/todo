package controllers

import (
	"net/http"

	"github.com/zhenghao-zhao/todo/app/models"
	"github.com/zhenghao-zhao/todo/app/utils"
)

func (s *Server) Login() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
	}
}

// func (s *Server) DoPreLogin() http.HandlerFunc {
// 	return func(w http.ResponseWriter, r *http.Request) {
// 		email := r.FormValue("email")
//
// 	}
// }

func (s *Server) DoLogin() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if utils.IsLoggedIn(r) {
			http.Redirect(w, r, "/dashboard", http.StatusOK)
			return
		}

		email := r.FormValue("email")
		password := r.FormValue("password")

		var user *models.User
		var error error

		user, error = models.FindUserByEmail(s.DB, email)

		if error != nil || !utils.ComparePassword(password, user.Password) {
			apiError := ErrorResponse{Message: "Incorrect email or password", Status: http.StatusBadRequest}
			JSONError(w, &apiError)
			return
		}

		error = utils.CreateUserSession(w, r, user.UID.String())
		if error != nil {
			apiError := ErrorResponse{Message: error.Error(), Status: http.StatusBadRequest}
			JSONError(w, &apiError)
			return
		}
		http.Redirect(w, r, "/dashboard", http.StatusSeeOther)
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

		if email == "" || password == "" || firstName == "" || lastName == "" {
			apiError := ErrorResponse{Message: "email, pasword, first name and last name must not be empty", Status: http.StatusBadRequest}
			JSONError(w, &apiError)
			return
		}

		var err error
		var hashedPassword string

		hashedPassword, err = utils.GeneratePassword(password)
		if err != nil {
			apiError := ErrorResponse{Message: err.Error(), Status: http.StatusInternalServerError}
			JSONError(w, &apiError)
			return
		}
		userModel := models.User{}
		userModel.Email = email
		userModel.Password = hashedPassword
		userModel.FirstName = firstName
		userModel.LastName = lastName

		err = models.CreateUser(s.DB, &userModel)
		if err != nil {
			apiError := ErrorResponse{Message: err.Error(), Status: http.StatusInternalServerError}
			JSONError(w, &apiError)
			return
		}

		err = utils.CreateUserSession(w, r, userModel.UID.String())
		if err != nil {
			apiError := ErrorResponse{Message: err.Error(), Status: http.StatusInternalServerError}
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
