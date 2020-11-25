const express      = require("express");
const router       = express.Router();
const Razorpay     = require("razorpay");
const mongoose     = require("mongoose");

const Purchase = require('../models/purchase');

// RAZORPAY INSTANCE
let instance = new Razorpay({
    key_id: 'rzp_test_bCnOnF4NXpGskM', // your `KEY_ID`
    key_secret: 'KCWzWfqFXeqBCFwo1V6rRaIU' // your `KEY_SECRET`
});


router.post("/order",(req,res)=>{
    params=req.body;
    instance.orders.create(params).then((data) => {
           res.json({"sub":data,"status":"success"});
    }).catch((error) => {
           res.json({"sub":error,"status":"failed"});
    });
});

router.post('/saveorder',(req,res)=>{
    var newOrder = new Purchase({
        order_
    });
    newOrder.save((err,order)=>{
        if(err){
            return res.json({status:"failed",message:"Something went wrong"});
        }
        else{
            return res.json({status:"success",message:"Order has been placed"});
        }
    });
});
    

module.exports =  router;