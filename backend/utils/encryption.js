const { sign, verify } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { promisify } = require("util");
const { JWT_SECRET, SALT } = process.env;
const signJWT = promisify(sign);
const verifyJWT = promisify(verify);

async function createHash(data) {
  return bcrypt.hash(data, Number(SALT));
}
async function verifyHash(data, hash) {
  return await bcrypt.compare(data, hash);
}

async function generateToken(payload, secret, expires = "1hr") {
  const token = await signJWT({ id: payload }, secret || JWT_SECRET, {
    expiresIn: expires,
  });
  return token;
}
async function verifyToken(token, secret) {
  const bool = await verifyJWT(token, secret || JWT_SECRET);
  return bool;
}

module.exports = { generateToken, verifyToken, createHash, verifyHash };
