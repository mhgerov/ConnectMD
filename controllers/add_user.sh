curl -X PUT \
	-H "Content-Type: application/json"\
	-d '{"email":"morty@sidekick.org","password":"password1234","first_name":"Morty","last_name":"Smith","date_of_birth":"1995-10-24","address":"42 Wallabe Way, Sydney, Australia","care_plan":"trash"}' \
	http://localhost:3000/api/user
