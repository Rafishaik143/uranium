const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const tokenValidation = async function (req, res, next) {
try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send({masg:"No such user exists"});
    }
  

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
 //Return an error if token not presenet
    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });

//Return a error if the token is not valid
    let decodedToken = jwt.verify(token, "functionup-uranium");
    if (!decodedToken)
        return res.status(404).send({ status: false, msg: "token is invalid" });

        let userToBeModified = req.params.userId
        let userLoggedIn = decodedToken.userId
     //Return an error if the user id of token 
        if(userToBeModified != userLoggedIn) return res.status(401).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
} catch (error) {
    console.log("This is the error :", error.message)
    res.status(500).send({ msg: "Error", error: error.message })
}

    next()
}

module.exports.tokenValidation = tokenValidation