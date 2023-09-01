const express = require("express")
require('colors')
const mongoose = require('mongoose')
const morgan = require("morgan")
const dotenv= require('dotenv')
const connectDB = require('./config/config')
const cors = require("cors")

//config dotenv
dotenv.config()

connectDB()

const app= express()
const port= process.env.PORT
console.log(port)
//MiddleWares
app.use(express.json())
app.use(morgan())
app.use(cors())
//routes
app.use('/api/pizzas',require("./routes/pizzaRoute"))
app.use('/api/users',require("./routes/userRoute"))
app.use('/api/orders', require("./routes/orderRoute"))
app.get('/',(req,res)=>{
    res.send('This is from server side')
})

app.listen(port,console.log(
    'server is successfully running on 8000'
))