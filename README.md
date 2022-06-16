# Google Archive API

Welcome to the back-end repo for [backrub.wiki](https://backrub.wiki/)! This REST API contains 3 MondoDB models:

1) 20 years of [The New York Times](https://www.nytimes.com/section/technology) Technology articles.
2) 20 years of [Google Doodles](https://www.google.com/doodles).
3) User-submitted memories.

## Instructions for local manipulation

1) Clone down this repo.
2) Install dependencies.
3) Seed the database.
4) Start server link.
5) View the API through a browser or manipulate its information through apps like [Postman](https://www.postman.com).

### Clone repository

```
git clone https://github.com/officecowboy/google-archive-api.git
```

### Install dependencies

```
npm install chalk cors express logger mongodb mongoose morgan
```

### Seed the data

```
npm run db:seed
```

### Connect to server

```
npm start
````

## API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /articles/             | Retrieves all NYT articles in the database   |
| GET    | /articles/:id          | Retrieves a single article by object ID  |
| GET    | /doodles/   | Retrieves all Google Doodles in the database |
| GET    | /doodles/:id | Retrieves a single doodle by object ID  |
| GET    | /memories/   | Retrieves all memories in the database |
| GET    | /memories/:id | Retrieves a single memory by object ID  |
| POST  | /memories/ | Creates a new memory based on the JSON body submitted.   |
| PUT    | /memories/:id | Updates a single memory based on the JSON submitted.    |
| DELETE | /memories/:id | Deletes a single memory by ID.    |

*Note: only GET commands will work in browser*

## Technologies

[MondoDB](https://www.mongodb.com/), [Node.js](https://nodejs.org/en/), and [Express](https://expressjs.com/).