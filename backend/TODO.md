within the application slice
- auth on the read endpoints (GET /api/applications currently exposes everyones PII lmao)
- proper info validation and cleaning
- string column lengths
- error handling
- tests (like ci covering POST, invalid POST, and retrieval of data)

other features
- enquire form endpoint and model and persisenmce
- courses data should be served from the backend ideallyw
- administrator view so the people at the vision place can look at all of the amazing applications
- user accounts or logins?? not sure

- secrets handling (for the db etc)
- config for non-local envs
- proper CI
- frontend wiring