const mongoose = require('mongoose')
const orderReducer = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    userid:{
        type:String,
    },
    orderitems:[],
    shippingAddress:{
        type:Object
    },
    orderAmount:{
        type:String,
        // required:true
    },
    isDeliverd:{
        type:String,
        // required:true
    },
    transectionId:{
        type:String,
        // required:true
    }


},
{timestamps:true})

module.exports = mongoose.model('order',orderReducer)
