require('dotenv').config()
module.exports =
{
  "secret" : process.env.SECRET_KEY,
  "development": {
    "username": process.env.PG_USERNAME || '',
    "password": process.env.PG_PASSWORD || '',
    "database": process.env.PG_DATABASE || 'imageuploader',
    "host": process.env.PG_HOSTNAME || '',
    "dialect": "postgres",
    "logging": false,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 60000
    }
  }
}
