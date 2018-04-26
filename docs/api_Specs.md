# ConnectMD API

## USERS

### PUT /api/user

request: JSON containing info from user form:
* user_email
* passwd_hash? (Dependent on Auth library)
* first_name
* last_name
* date_of_birth: YYYY-MM-DD
* user_address
* user_plan

response: 200 if successful, error if not and JSON containing user_id

Creates a new user

### GET /api/user/:userid

request: none

response: JSON containing
* user_email
* first_name
* last_name
* date_of_birth
* user_address
* user_plan

## PROVIDERS

## PUT /api/provider

request: JSON containing:
* npi
* first_name
* last_name
* address
* specialty
* address

response: 200 if successful, error if not

Creates new provider

## GET /api/provider/:npi

request: none

response: JSON containing:
* npi
* first_name
* last_name
* address
* specialty
* address

## APPOINTMENTS

### PUT /api/user/:userid

