const Redis = require('ioredis');
const redis = new Redis();

// Initialise F0 and F1.
const cfib_init = async () => {
  await redis.set(0, 0);
  await redis.set(1, 1);
};

// Cached Fibonacci function.
const cfib = async (n) => {
  const res = await redis.get(n);
  if (res === null) {
    const a = Number(await cfib(n - 1));
    const b = Number(await cfib(n - 2));
    await redis.set(n, a + b);
    return a + b;
  }
  return res;
};

redis.on('error', function (error) {
  console.error(error);
});

// Calculate the 25th Fibonacci number, caching numbers using Redis if it hasn't been calculated before.
redis.on('ready', async () => {
  console.log('Redis client connected.');
  await cfib_init();
  console.log('Calculated Fibonacci number:', await cfib(25));
});
