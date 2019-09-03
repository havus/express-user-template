# Server Template

## Getting Started
Install all package
```bash
npm install
# OR
yarn
```
<br>
<i>Default port in <b>3000</b></i>
<br>

* [User](#users)
  * [Sign Up](#sign-up)
  * [Sign In](#sign-in)

## Users
+ ### Sign Up
  **Method** : `POST`<br>
  **Endpoint** : `/user/signup`

  #### _Request_ :
  * body:
    ```json
    {
      "fullname": String(required),
      "username": String(required),
      "email": String(required),
      "password": String(required),
      "profile_pic": String,
    }
    ```

  #### _Response Body_ :
  - 201
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
  - 400
    ```json
    {
      "code": 400,
      "message": [
        "Fullname required!",
        "Username required!",
        "Email required!",
        "Password required!"
      ]
    }
    ```

+ ### Sign In
  **Method** : `POST`<br>
  **Endpoint** : `/user/signin`

  #### _Request_ :
  * body:
    ```json
    {
      "email": String(required),
      "password": String(required),
    }
    ```

  #### _Response Body_ :
  - 201
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
  - 404
    ```json
    {
      "code": 404,
      "message": "Wrong username / password",
    }
    ```


## Another Error
  + Our mistake report this error as issue
  ```json
  {
    "code": 500,
    "message": "Internal server error :("
  }
  ```