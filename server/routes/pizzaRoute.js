const express = require('express')
const router = express.Router()

const pizzaModel = require('../model/pizzaModel')

// GET ALL PIZZA  this api in frontent hit and used in pizzaAction.js
router.get('/getAllPizzas',async (req,res)=>{
    try {
        const pizzas = await pizzaModel.find({})
        res.send(pizzas)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports =router;