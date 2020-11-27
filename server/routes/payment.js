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
        items: req.body.orderData,
        address: req.body.orderAddress
    });
    newOrder.save((err,order)=>{
        if(err){
            return res.json({status:"failed",message:"Something went wrong"});
        }
        else{
            console.log(order);
            return res.json({status:"success",message:"Order has been placed"});
        }
    });
});

router.get('/getorder',(req,res)=>{
    var userId = mongoose.Schema.Types.ObjectId(req.headers._id);
    Purchase.find({owner_id: userId},(err,foundOrders)=>{
        if(err){
            return res.json({status:"error"});
        }
        else{
            return res.json({status: "success", data:foundOrders});
        }
    });
});
    

module.exports =  router;