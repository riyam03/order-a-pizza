
const express = require('express')
const router = express.Router()

const User = require('../model/userModel')

router.post('/register',(req,res)=>{
    const {name,phone,email,password}= req.body

    const newUser= new User({name,phone,email,password})
    try {
        
        newUser.save()
        res.status(200).json({
            success:true,
            message:"Register success"
        });
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try {
        const user = await User.find({email,password})
        if(user.length>0){
            const currentUser ={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _is:user[0].Id

            }
            res.status(200).send(currentUser)
        }else{
            res.status(400).json({
                message:'Login Failed'
            })
        }
    } catch (error) {
        res.status(404).json({
            message:"Something went worng"
        })
    }
})

module.exports = router