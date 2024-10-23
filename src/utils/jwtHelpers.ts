import jwt, {  Secret } from "jsonwebtoken";

const generateToken = (payload: any, secret: Secret, expiresIn: string) => {
  const token = jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn,
  });
  return token;
};

const verifyToken = (token: string, secret: Secret): any => {
  const decoded = jwt.verify(token, secret);
  console.log(decoded)
  return decoded
};

export const jwtHelpers = {
  generateToken,
  verifyToken,
};
