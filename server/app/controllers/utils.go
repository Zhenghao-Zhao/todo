package controllers

import (
	"encoding/json"
	"net/http"
)

type ApiError struct {
	Message string
	Code    int
}

func (e *ApiError) Error() string {
	return e.Message
}

type Response struct {
	Message string
	Status  int
}

func JSONResponse(w http.ResponseWriter, response *Response) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(response.Status)
	json.NewEncoder(w).Encode(response)
}

func JSONError(w http.ResponseWriter, err error) {
	w.Header().Set("Content-Type", "application/json")

	if apiError, ok := err.(*ApiError); ok {
		w.WriteHeader(apiError.Code)
		json.NewEncoder(w).Encode(map[string]string{"error": apiError.Message})
	} else {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{"error": err.Error()})
	}
}
