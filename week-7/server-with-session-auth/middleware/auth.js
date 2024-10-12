const authMiddleware = (req, res, next) => {
  //  authMiddleware logic here

  if(req.session.userId){
    req.userId = req.session.userId; //stores the object id of (the username and password object in the admin/users db) 
    next();
  }else{
    res.status(403).json({
      message: "Incorrect credentials"
    });
  }

};

module.exports = authMiddleware;
