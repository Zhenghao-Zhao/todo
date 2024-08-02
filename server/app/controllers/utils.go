package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type ErrorResponse struct {
	Message string
	Status  int
}

func (e *ErrorResponse) Error() string {
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

	if apiError, ok := err.(*ErrorResponse); ok {
		w.WriteHeader(apiError.Status)
		json.NewEncoder(w).Encode(map[string]string{
			"Error":  apiError.Error(),
			"Status": fmt.Sprintf("%d", apiError.Status),
		})
	} else {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{
			"Error":  err.Error(),
			"Status": fmt.Sprintf("%d", http.StatusInternalServerError),
		})
	}
}
