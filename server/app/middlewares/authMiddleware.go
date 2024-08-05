package middlewares

import (
	"net/http"

	"github.com/zhenghao-zhao/todo/app/utils/api"
	"github.com/zhenghao-zhao/todo/app/utils/auth"
)

func AuthMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if !auth.IsLoggedIn(r) {
			api.ErrorResponse(w, "Unauthenticated", http.StatusBadRequest)
			return
		}
		next.ServeHTTP(w, r)
	}
}
