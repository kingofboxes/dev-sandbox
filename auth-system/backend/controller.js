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
const loginUser = async (req, res) => {
  let hash = await redis.get(req.body.username);
  const diff = bcrypt.compareSync(req.body.password, hash);
  diff ? res.status(200).send() : res.status(500).send({ error: 'Invalid username or password.' });
};

module.exports = {
  registerUser,
  loginUser,
};
