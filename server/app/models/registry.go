package models

type Model interface {
	RegisterModel()
}

func GetModels() []Model {
	return []Model{
		&User{},
		&Role{},
	}
}
