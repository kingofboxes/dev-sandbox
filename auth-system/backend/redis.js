// Grab requirements.
require('dotenv').config();
const Redis = require('ioredis');

// Read .env variables.
const redisDB = process.env.REDIS_DB;
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;
const redisPassword = process.env.REDIS_PW;

// Connect to Redis DB.
const redis = new Redis({
  port: redisPort,
  host: redisHost,
  db: redisDB,
  password: redisPassword,
  family: 4,
});

module.exports = redis;
