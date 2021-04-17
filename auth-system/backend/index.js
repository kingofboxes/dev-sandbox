// Import modules.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const redis = require('./redis');
const cookieParser = require('cookie-parser');

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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// Uses / path as a default.
app.use('/', router);

// Start Express.
app.listen(21587, () => console.log('Express is now running on port 21587.'));
