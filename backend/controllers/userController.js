const database = require("../models");
const jwt = require('jsonwebtoken');
const generalModule = require('../modules/general');
const  _ = require('lodash');

exports.store = (req, res) => {

  database.collections.USER
    .create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email:    req.body.email,
      password:req.body.password,
 

    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.findAll =async (req, res) => {
  
  await database.collections.USER.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};




exports.login = async(req, res) => {

    // get user object by email and store in a variable 
    let user = await database.collections.USER.findOne({

      email: req.body.email

    });
    // if user found
    if (user) {

      // match request password with user password (user password is the hash password that is created while signup)
      let hasValidPassword = generalModule.validatePassword(
        req.body.password,
        user.password
      );

      if(hasValidPassword){

            //if both passwords are match means this custom function return true then 
            // get signin with jwt token
            // jwt.signin is built in function in jwt library
            user.token = jwt.sign(
              {
                id: user._id,
              },
              generalModule.getSecretCode()
              ,
              {
                expiresIn: "10d",
              }
            );

            res.status(200).json({
              status: 200,
              data: _.pick(user,['_id','token','email']),
            });

      }else{

        //if password does not match

        res.status(400).json({
          status: 400,
          message: "Password is incorrect",
        });
      }

    }else{
         // if user is not found
        res.status(400).json({
          status: 400,
          message: "No account exist",
        });

    }

};