# `@cloud-technology/api` #

## Setup ##

1. Create a `.env` File:

```json
{
    "CI": false,
    "GitHub": {
        "API": "https://api.github.com/",
        "User": "username",
        "Token": "********"
    },
    "GitLab": {
        "API": "/api/v4/",
        "Host": "gitlab.example.com",
        "Projects": "https://gitlab.example.com/api/v4/projects",
        "User": "username",
        "Token": "********"
    },
    "Server": "Nexus-API",
    "Environment": "Development"
}
```

2. Install Dependencies:

```bash
npm install .
```

## Usage ##

```bash
npm start || node server.js
```

## References ##

- https://express-validator.github.io/docs/index.html
- https://www.bezkoder.com/node-js-mongodb-auth-jwt/
- https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/





