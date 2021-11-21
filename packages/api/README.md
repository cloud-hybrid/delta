# `@cloud-technology/api` #

## Setup ##

1. Create a `.env` File (See [`.env.example` file](./.env.example))
2. Install Dependencies:
    ```bash
    npm install .
    ```

## Usage ##

```bash
npm start || node server.js
```

## Error Code(s) ##

|    Exit Code    |  Description  |         Signal         |
|   :---------:   | :-----------: |        :------:        |
|     **172**     | [Error](#172) |     `ECONNREFUSED`     |

### Signal & Error Map ###

#### 172 ####

Mongo-related error often associated with either network-related external access permission(s), a closed port, or when the server is local to the API server and the `mongo` process isn't running.

## References ##

- https://express-validator.github.io/docs/index.html
- https://www.bezkoder.com/node-js-mongodb-auth-jwt/
- https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
