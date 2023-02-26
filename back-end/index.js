require('dotenv').config();
const express = require('express');
const cors = require('cors')

const { connect } = require('./config/connection')
const {userRouter} = require("./router/User.router")

const app = express();
const PORT = process.env.PORT;

app.use(express.json()) //middlewares for express json
app.use(cors({
    origin : '*'
}))
app.use("/" , userRouter)

app.get("/", (req, res) => {
    res.send('Hello World')
})


//make an server connection with database
app.listen(PORT, async () => {
    try {
        await connect
        console.log('Database is Connected Successfully')
        console.log(`http://localhost:${PORT}`)
    } catch (error) {
        console.log(error)
    }
})
