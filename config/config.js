require('dotenv').config()
module.exports =
{
  "development": {
    "username": process.env.MYSQL_USERNAME || '',
    "password": process.env.MYSQL_PASSWORD || '',
    "database": process.env.MYSQL_DATABASE || 'imageuploader',
    "host": process.env.MYSQL_HOSTNAME || '',
    "dialect": "mysql",
    "logging": false,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 60000
    }
  }
}
