package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UID       uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()"`
	FirstName string    `gorm:"size:100;not null"`
	LastName  string    `gorm:"size:100;not null"`
	Email     string    `gorm:"size:255;not null"`
	Password  string    `gorm:"size:128;not null"`
	Roles     []Role    `gorm:"many2many:user_roles;"`
}

func CreateUser(db *gorm.DB, user *User) error {
	result := db.Create(user)

	if result.Error != nil {
		return result.Error
	}
	return nil
}
