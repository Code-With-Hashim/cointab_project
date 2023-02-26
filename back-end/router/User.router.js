const express = require('express')
const { deleteUser } = require('../Functions/deleteUser.function')

const {fetchUser} = require("../Functions/fetchUser.function")
const { getUser } = require('../Functions/getUser.function')

const userRouter = express.Router() // for routing

userRouter.post("/fetchUser", fetchUser) // fetchUser API Endpoint

userRouter.delete("/deleteUser" , deleteUser)

userRouter.get("/getUser" , getUser)

module.exports = { userRouter }