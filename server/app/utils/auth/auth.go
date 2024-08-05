package auth

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
	session, err := GetCurrentUserSession(r)
	if err != nil {
		return err
	}
	session.Values["user_id"] = userID
	session.Values["logged_in"] = true
	fmt.Println(session.Values["logged_in"])
	return session.Save(r, w)
}

func RemoveUserSession(w http.ResponseWriter, r *http.Request) error {
	session, err := GetCurrentUserSession(r)
	if err != nil {
		return err
	}
	session.Options.MaxAge = -1
	err = session.Save(r, w)
	return err
}

func GetCurrentUserSession(r *http.Request) (*sessions.Session, error) {
	return Store.Get(r, SessionNameUser)
}

func IsLoggedIn(r *http.Request) bool {
	session, _ := GetCurrentUserSession(r)
	fmt.Println(session.Values["logged_in"])
	if loggedIn, ok := session.Values["logged_in"].(bool); loggedIn && ok {
		return true
	}
	return false
}
