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
    console.log(req.headers,req.body);
    var newOrder = new Purchase({
        owner_id : mongoose.Types.ObjectId(req.headers._id),
        order: {
            payment_id: req.body.orderDetails.razorpay_payment_id,
            order_id: req.body.orderDetails.razorpay_order_id,
            signature: req.body.orderDetails.razorpay_signature,
        },
        items: req.body.orderData
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