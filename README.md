# **Server Template With Express**
> _This repo made with love_  :heart:

# _Section Header_
* [Dependencies](#dependencies)
* [Features](#features)
* [Clone](#clone)
* [Installation](#installation)
* [Usage](#usage)
* [Another Error](#another-error)
* [License](#license)

## Dependencies
> List of all dependencies
* [morgan](https://www.npmjs.com/package/morgan)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [cors](https://www.npmjs.com/package/cors)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## Features
* Sign Up
* Sign In
* Knowing Request With Morgan for Development
* Authentication Middleware
* Error Handler Middleware

## Clone
* Clone this repo
```bash
$ git clone https://github.com/havus/express-user-template.git
```

## Installation
Enter to the folder and install all `Dependencies`
```bash
$ npm install
# OR
$ yarn
``` 
<br>

## Usage
### Running server
```bash
$ npm run dev
# OR
$ yarn dev
```
#### Base Url default :<br>
> `http://localhost:3000`

<br>

### List Endpoint
* [**User**](#users)
  * [Sign Up](#sign-up)
  * [Sign In](#sign-in)

### Users
+ ### **Sign Up**
  > **Method** : `POST`<br>
  > **Endpoint** : `/user/signup`

  #### _Request_ :
  * body:
    ```javascript
    {
      "fullname": String(required),
      "username": String(required),
      "email": String(required),
      "password": String(required),
      "profile_pic": String
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
        "Username has already been taken!",
        "Email has already been taken!"
      ]
    }

+ ### Sign In
  > **Method** : `POST`<br>
  > **Endpoint** : `/user/signin`

  #### _Request_ :
  * body:
    ```javascript
    {
      "email": String(required),
      "password": String(required)
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
      "message": "Wrong username / password"
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


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="https://github.com/havus" target="_blank">HAVUS</a>.
- Contributor [
  <a href="https://github.com/justarya" target="_blank">Just Arya</a>
]

<br><br><br>
### Happy Hacking!
