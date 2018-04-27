curl -X POST \
	-H "Content-Type: application/json"\
	-d '{"email":"wrong@example.com","password":"password1234"}' \
	http://localhost:3000/api/login
