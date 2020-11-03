# Backend for MERN-blog

## Version

1.0.0

### API Planning

root api: mern-api

standar api
{root-api}/{version}/{grouping}/{endpoint}

standar response

status: 200
{
"message": "success",
"data": {
"id": 1,
"{req}": "{res}"
}
}

status: 400
{
"message": "error on input"
}

status: 401
{
"message": "user not authorized"
}

status: 403
{
"message": "user not allowed on access"
}

status: 404
{
"message": "error endpoint response not found"
}

status: 500
{
"message": "error on server"
}

#### Group auth

- [ ] login
- [ ] register

#### Group Blog

- [ ] create blog post
- [ ] get blog post
- [ ] update blog post
- [ ] delete blog post
