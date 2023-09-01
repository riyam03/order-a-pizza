const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colors')
const connectDB = require('./config/config')
const Pizza = require('./model/pizzaModel')
const Pizzas = require('./data/PizzaData')

dotenv.config()
connectDB()


const importData = async ()=>{
    try {
        await Pizza.deleteMany()
        const sampleData = Pizzas.map(pizza=>{return{...pizza}})
        await Pizza.insertMany(sampleData)
        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}
  
const dataDestroy = ()=>{

}

if (process.argv[2]==="-d"){
    dataDestroy();
}else{
    importData();
}