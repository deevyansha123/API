const express = require('express');
const userRouter = express.Router();
const userController = require("../controller/userController")
//To create data in db
userRouter.post("/createData", userController.createData)
//To list top six current data from db
userRouter.get("/listData", userController.listData)


module.exports = userRouter;