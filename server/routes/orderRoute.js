const express= require('express')
const router= express.Router()
const {v4: uuidv4} = require('uuid');
const stripe = require('stripe')('sk_test_51MixYVSJt2ivNj4mrxcwRu5kQsGZbuKlaHRH9OlcbHbdtJtGOu953OAPQmrsOfSEFsElKrZr9iwwzJvA10OKYlGH005gwrqRDs')
const Order = require('../model/orderModel')
router.post("/placeorder",async (req,res)=>{
    const {token,subTotal,currentUser,cartItems}= req.body
    console.log(currentUser,'this is cart items',cartItems)
    console.log(currentUser.name , "this is pizza",cartItems.map(x=>x.name))
    try {
        const newOrder =new Order ({
            name:currentUser.name,
            email:currentUser.email,
            userid: currentUser._id,
            orderItems:[cartItems.map(x=>{x.name})],
            orederAmount:subTotal,
            shippingAddress:{
                street:token.card.address_line1,
                city:token.card.address_city,
                country:token.card.address_country,
                picode:token.card.address_zip
            },
            // transactionId:payment.source.id
        })
        newOrder.save()
        res.send('Payment Success')
        console.log(newOrder)
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id,
        })
        console.log(customer)
        const payment = await stripe.charges.create({
            amount:subTotal*100,
            currency:'inr',
            customer:customer.id,
            receipt_email:token.email,
        },{
            idempotencyKey:uuidv4(),
        })
        console.log(customer)
        // if(payment){
            
        // }else{
        //     res.send('Payment Failed')
        // }
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message:"Something went wrong",
            error:error.stack,
            
        })
    }
})


router.post('/getuserorder',async (req,res)=>{
    const {userid} =req.body
    try {
        const orders = await Order.find({userid});
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong",
            error:error.stack,
        })
    }
})

module.exports = router