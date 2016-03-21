# Kafi-Server
# Mobile API
GET `http://localhost:5555/check` returns

```
{
  "_id": "56ef3576c50ba6ec4d90ed78",
  "username": "denemeuser",
  "created_at": "2016-03-20T23:42:46.271Z",
  "completed": false,
  "sent": false,
  "content": "denemecontent",
  "__v": 0
}
```

POST `http://localhost:5555/request` you send:

```
{
  "username": "someuser",
  "content": {"coffee": 5,
              "cream": 10,
              "sugar": 5,
              "water": 200}
}
```
it returns the recipee that is created by that request.
