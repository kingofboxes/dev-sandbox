// Express + middleware.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
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

// Create Express instance and adds cors / body-parser functionality.
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
app.use(bodyParser.json({ limit: '25mb' }));

// Ignore favicon get requests.
app.get('/favicon.ico', function (req, res) {
  res.status(204);
  res.end();
});

// Uses / path as a default.
app.use('/', router);

// Start Express.
app.listen(21587, () => console.log('Express is now running on port 21587.'));
