package api

import (
	"encoding/json"
	"net/http"
)

type Payload struct {
	Data    interface{} `json:"data,omitempty"`
	Message string      `json:"message,omitempty"`
	Code    int         `json:"code"`
}

func JSONResponse(w http.ResponseWriter, response interface{}, code int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	json.NewEncoder(w).Encode(response)
}

func OKResponse(w http.ResponseWriter) {
	resp := Payload{
		Message: "Success",
		Code:    http.StatusOK,
	}
	JSONResponse(w, &resp, resp.Code)
}

func DataResponse(w http.ResponseWriter, data interface{}, code int) {
	resp := Payload{
		Data: data,
		Code: code,
	}
	JSONResponse(w, &resp, resp.Code)
}

func ErrorResponse(w http.ResponseWriter, message string, code int) {
	apiError := Payload{Message: message, Code: code}
	JSONResponse(w, &apiError, code)
}
