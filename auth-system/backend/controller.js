const redis = require('./redis');
const bcrypt = require('bcrypt');

// Hash a user's password and store into Redis if user does not exist.
const registerUser = async (req, res) => {
  let hash = await redis.get(req.body.username);
  if (hash) {
    res.status(500).send({ error: 'Username has been taken.' });
  } else {
    hash = bcrypt.hashSync(req.body.password, 10);
    await redis.set(req.body.username, hash);
    res.status(200).send();
  }
};

// Use bcrypt to compare hashes.
const loginUser = async (req, res, next) => {
  try {
    let hash = await redis.get(req.body.username);
    const diff = bcrypt.compareSync(req.body.password, hash);
    if (!diff) {
      res.status(500).send({ error: 'Invalid password.' });
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.cookie('authSession', req.body.username, {
        maxAge: 900000,
        name: 'session',
        secret: 'booboo',
        httpOnly: true,
        path: '/',
        domain: 'localhost',
        sameSite: true,
        secure: false,
      });
      res.status(200).send();
      next();
    }
  } catch (err) {
    res.status(500).send({ error: 'Invalid username.' });
  }
};

// Fetch data.
const fetchData = async (req, res) => {
  console.log(req.cookies.authSession);
};

module.exports = {
  fetchData,
  registerUser,
  loginUser,
};
