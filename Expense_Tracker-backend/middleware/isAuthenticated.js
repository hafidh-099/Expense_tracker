const jwt = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => {
  const headerObj = req.headers;
  const token = headerObj?.authorization.split(" ")[1];

  //vairify
  const isVairified = jwt.verify(token, "it is secret", (err, decode) => {
    if (err) {
      return err;
    } else {
      return decode;
    }
  });
  if (isVairified) {
    //we save user in request object in order to use in other area
    req.user = isVairified.id;
    next();
  } else {
    const err = new Error("invalid token");
    next(err);
  }
};
module.exports = isAuthenticated;
