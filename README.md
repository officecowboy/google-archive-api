# Google Archive API

# Models
Articles - Will show the top 10 articles for a spefici day.
doodles - will show the google doodles for a specific day with an image. (example: Thanksgiving day will show a turkey image)
memories - allow user to pick a day and add a memory
weather - List the current temperature in New york City

# seed 
 The seed file will allow us to included all the information for each of the model in use and the data.js will allow us to add the information to the databse.

# routes
The route contain all the CRUD functions for the models that will be use in this project.

## API Article Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /articles/             | Retrieves all articles in the database   |
| GET    | /articles/:id          | Retrieves a single article by object ID.  |
| GET    | /articles/random   | Retrieves one random article. |
| GET    | /articles/random-ten | Retrieves an array of ten random articles.  |
| GET    | /articles/?tag=tag | Retrieves all articles with submitted tag.   |
| GET    | /articles/?author=author | Retrieves all articles by submitted author.  |
| POST  | /articles/ | Creates a new article based on the JSON body submitted.   |
| PUT    | /articles/:id | Updates a single article based on the JSON submitted.    |
| DELETE | /articles/:id | Deletes a single article by ID.    |

*Note: only GET commands will work in browser*

## API Memory Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /memories/             | Retrieves all memories in the database   |
| GET    | /memories/:id          | Retrieves a single memories by object ID.  |
| GET    | /memories/random   | Retrieves one random memory. |
| GET    | /memories/random-ten | Retrieves an array of ten random memories.  |
| GET    | /memories/?tag=tag | Retrieves all memories with submitted tag.   |
| GET    | /memories/ | Retrieves all memories.  |
| POST  | /memories/ | Creates a new memory based on the JSON body submitted.   |
| PUT    | /memories/:id | Updates a single memory based on the JSON submitted.    |
| DELETE | /memories/:id | Deletes a single memory by ID.    |

*Note: only GET commands will work in browser*

## API Doodles Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /doodles/             | Retrieves all doodles in the database   |
| GET    | /doodles/:id          | Retrieves a single doodles by object ID.  |
| GET    | /doodles/random   | Retrieves one random doodles. |
| GET    | /doodles/random-ten | Retrieves an array of ten random doodles.  |
| GET    | /doodles/?tag=tag | Retrieves all doodles with submitted tag.   |
| PUT    | /doodles/:id | Updates a single doodles based on the JSON submitted.    |
| DELETE | /doodles/:id | Deletes a single doodles by ID.    |

*Note: only GET commands will work in browser*

## API weather Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /weather/             | Retrieves all weather in the database   |
| GET    | /weather/:id          | Retrieves a single weather by object ID.  |
| GET    | /weather/random   | Retrieves one random weather. |
| GET    | /weather/random-ten | Retrieves an array of ten random weather.  |
| GET    | /weather/?tag=tag | Retrieves all weather with submitted tag.   |
| GET    | /weather/ | Retrieves all weather.  |
| POST  | /weather/ | Creates a new weather based on the JSON body submitted.   |
| PUT    | /weather/:id | Updates a single weather based on the JSON submitted.    |
| DELETE | /weather/:id | Deletes a single weather by ID.    |

*Note: only GET commands will work in browser*

# Technology
Javascript
mongoose
express
