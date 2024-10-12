const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const secret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  //  authMiddleware logic here
  const authHeader = req.headers.authorization;

  //logic for extracting token from bearer token format
   if (!authHeader || !authHeader.startsWith("Bearer ")) {
     return res
       .status(401)
       .json({ message: "Authorization token missing or malformed" });
   }

  const token = authHeader.split(' ')[1];

  const response = jwt.verify(token, secret); //If the token is valid: It returns the decoded payload of the JWT, which is typically an object

  if(response){
    req.userId = response.id; //stores the object id of (the username and password object in the admin/users db) 
    next();
  }else{
    res.status(403).json({
      message: "Incorrect credentials"
    });
  }

};

module.exports = authMiddleware;
