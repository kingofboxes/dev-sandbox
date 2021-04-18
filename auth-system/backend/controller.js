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

// Use bcrypt to compare hashes and log in.
const loginUser = async (req, res) => {
  try {
    let hash = await redis.get(req.body.username);
    const diff = bcrypt.compareSync(req.body.password, hash);
    if (!diff) {
      res.status(500).send({ error: 'Invalid password.' });
    } else {
      res.cookie('authSession', req.body.username, {
        maxAge: 900000,
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
      });
      res.status(200).send();
    }
  } catch (err) {
    res.status(500).send({ error: 'Invalid username.' });
  }
};

// Send dummy data back based on the cookie.
const fetchData = async (req, res) => {
  const cookie = req.cookies.authSession;
  if (cookie) {
    res.status(200).send({ msg: `Currently logged in as: ${cookie}.` });
  } else {
    res.status(500).send({ msg: 'Not logged in.' });
  }
};

// Signs a user out and clears their cookie.
const logoutUser = async (req, res) => {
  res.clearCookie('authSession');
  res.status(200).send({ msg: 'Logged out successfully.' });
};

module.exports = {
  fetchData,
  registerUser,
  loginUser,
  logoutUser,
};
