curl -X PUT \
	-H "Content-Type: application/json"\
	-d '{"email":"test@example.com","password":"password1234","first_name":"Rick","last_name":"Sanchez","date_of_birth":"1960-10-24","address":"42 Wallabe Way, Sydney, Australia","care_plan":"premium"}' \
	http://localhost:3000/api/user
