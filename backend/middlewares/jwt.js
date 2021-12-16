const jwt = require("jsonwebtoken");
const generalModule = require("../modules/general");

module.exports.authentication =async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }else{
    jwt.verify(token,generalModule.getSecretCode(), (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }else{
        next();
      }
    });
  }
};