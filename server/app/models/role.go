package models

import (
	"gorm.io/gorm"
)

type Role struct {
	gorm.Model
	Name        string `gorm:"size:100;not null"`
	Description string `gorm:"size:255"`
}

func (r Role) RegisterModel() {}
