package models

import (
	"fmt"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UID       uuid.UUID `gorm:"type:uuid;default:gen_random_uuid()"`
	FirstName string    `gorm:"size:100;not null"`
	LastName  string    `gorm:"size:100;not null"`
	Email     string    `gorm:"size:255;not null;unique"`
	Password  string    `gorm:"size:128;not null"`
	Roles     []Role    `gorm:"many2many:user_roles;"`
}

func (u User) RegisterModel() {}

func CreateUser(db *gorm.DB, user *User) error {
	fmt.Printf("creating user...%v", *user)
	result := db.Create(user)

	if result.Error != nil {
		return result.Error
	}
	return nil
}
