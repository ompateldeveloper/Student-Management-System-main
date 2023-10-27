const express = require("express");
const {loginUser,signupUser,verifyUser} = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/login",loginUser);
userRouter.post("/signup",signupUser);
userRouter.post("/verify",verifyUser);



module.exports = userRouter;