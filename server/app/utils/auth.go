package utils

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/sessions"
	"golang.org/x/crypto/bcrypt"
)

func GeneratePassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(hashedPassword), err
}

func ComparePassword(plainPassword string, hashedPassword string) bool {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(plainPassword)) == nil
}

var (
	Store           = sessions.NewCookieStore([]byte(os.Getenv("SESSION_KEY")))
	SessionNameUser = "user-session"
)

func CreateUserSession(w http.ResponseWriter, r *http.Request, userID string) error {
	fmt.Println("creating session...")
	session, err := Store.Get(r, SessionNameUser)
	if err != nil {
		return err
	}

	session.Values["user_id"] = userID
	session.Values["logged_in"] = true

	return session.Save(r, w)
}

func GetCurrentSession(r *http.Request) (*sessions.Session, error) {
	return Store.Get(r, SessionNameUser)
}

func IsLoggedIn(r *http.Request) bool {
	session, _ := GetCurrentSession(r)
	if loggedIn, ok := session.Values["logged_in"].(bool); loggedIn && ok {
		return true
	}
	return false
}
