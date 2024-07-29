package controllers

func (s *Server) initRoutes() {
	s.HandleFunc("/", s.Home()).Methods("GET")
	s.HandleFunc("/login", s.Login()).Methods("GET")
	s.HandleFunc("/login", s.DoLogin()).Methods("POST")
	s.HandleFunc("/register", s.Register()).Methods("GET")
	s.HandleFunc("/register", s.DoRegister()).Methods("POST")
	s.HandleFunc("/logout", s.DoLogout()).Methods("POST")
}
