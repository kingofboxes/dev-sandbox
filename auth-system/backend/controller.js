const redis = require('./redis');

const test = async (req, res) => {
  console.log(req.body);
  const val = await redis.get('0');
  res.send('Hello!');
  console.log(val);
};

const registerUser = async (req, res) => {
  res.send('register');
};

const loginUser = async (req, res) => {
  res.send('login');
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
