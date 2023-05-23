const jwt = require("jsonwebtoken");
const process = require("process");
const secret = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split("cuidate")[1];

  if (!token) {
    return res.status(401).json({ message: "No se proporcionó un token" });
  }

  jwt.verify(token, secret, (err, {payload}) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }

    req.user = payload.user;

    next();
  });
};

module.exports = verifyToken;