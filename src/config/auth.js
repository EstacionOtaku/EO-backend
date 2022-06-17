module.exports = {
  secretToken: process.env.JWT_SECRET,
  accessExpires: process.env.ACCESS_EXPIRE,
  refreshExpires: process.env.REFRESH_EXPIRE,
  algorithm: "bcrypt_sha256",
  rounds: 12,
};
