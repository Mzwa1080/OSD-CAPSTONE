import { config } from "dotenv";
config();
import jwt from "jsonwebtoken";

function createToken(user) {
  return jwt.sign(
    {
      emailAdd: user.emailAdd,
      userPwd: user.userPwd,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
}

function verifyToken(req, res, next) {
  //retrieve a token from the browser
  const token = req?.headers["Authorization"];
  if (token) {
    if (jwt.verify(token, process.env.SECRET_KEY)) {
      next();
    } else {
      res?.json({
        status: res.statusCode,
        msg: "please provide the correct credentials",
      });
    }
  } else {
    res?.json({
      status: res.statusCode,
      msg: "Please Login.",
    });
  }
}
export { createToken, verifyToken };
