const mongoose = require('mongoose')
require('colors')
const connectDB=async()=>{
    try{
        const url = process.env.URL
        const conn = await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`Mongodb database connected! ${conn.connection.host}`.bgCyan.white)
    }catch(error){
        console.log(`error: ${error}`)
    }
}

module.exports = connectDB;