const express      = require("express");
const router       = express.Router();
const Razorpay     = require("razorpay");




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
    

module.exports =  router;