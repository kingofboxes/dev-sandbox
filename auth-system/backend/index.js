// Express + middleware.
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Custom exports.
const router = require('./router');
const redis = require('./redis');

// Connect to Redis db.
redis.on('error', function (error) {
  console.error(error);
});

redis.on('ready', () => {
  console.log('Redis client connected.');
});

// Create Express instance and add middleware.
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// Ignore favicon get requests.
app.get('/favicon.ico', function (req, res) {
  res.status(204);
  res.end();
});

// Uses / path as a default.
app.use('/', router);

// Start Express.
app.listen(21587, () => console.log('Express is now running on port 21587.'));
