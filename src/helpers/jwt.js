import { sign, verify } from "jsonwebtoken";
import { accessExpires, refreshExpires, secretToken } from "../config/auth";

const jwtSignIn = (payload) => {
  const accessToken = sign(payload, secretToken, {
    expiresIn: accessExpires,
  });

  const refreshToken = sign(payload, secretToken, {
    expiresIn: refreshExpires,
  });

  return {
    accessToken,
    refreshToken,
  };
};

const jwtVerify = (token) => verify(token, secretToken);

export { jwtSignIn, jwtVerify };
