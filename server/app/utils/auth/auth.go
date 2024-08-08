package auth

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/sessions"
	"github.com/zhenghao-zhao/todo/app/models"
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

func CreateUserSession(w http.ResponseWriter, r *http.Request, user *models.User) error {
	fmt.Println("creating session...")
	session, err := GetCurrentUserSession(r)
	if err != nil {
		return err
	}
	session.Values["user_id"] = user.UID
	session.Values["firstName"] = user.FirstName
	session.Values["lastName"] = user.LastName
	session.Values["logged_in"] = true
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
	loggedIn, ok := GetSessionValue[bool](session, "logged_in")
	if loggedIn && ok {
		return true
	}
	return false
}

func GetSessionValue[T any](session *sessions.Session, key string) (T, bool) {
	val, exists := session.Values[key]
	fmt.Println(val, exists)
	if !exists {
		var zero T

		return zero, false
	}

	typedVal, ok := val.(T)
	return typedVal, ok
}
