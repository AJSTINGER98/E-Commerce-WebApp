const express      = require("express");
const router       = express.Router();
const Order     = require("../models/order");
const mongoose = require('mongoose');

// Add orders to DB
router.post('/', (req,res)=>{
    // item=JSON.parse(req.body)r
    // console.log(req.body.data)
    var newOrder={name: req.body.data.name, image:req.body.data.image, item_id: req.body.data.item, quantity: req.body.data.quantity, price:req.body.data.price};
    var userId= mongoose.Types.ObjectId(req.headers._id);
    Order.find({owner:userId, "items.item_id": req.body.data.item}, function(err,result){
            if(result && result.length>0){    
                console.log(result); 
                Order.where({owner:userId, 'items.item_id':req.body.data.item}).update({$inc: {'items.$.quantity': req.body.data.quantity}},function(err2, orderData){
                if(err2){
                    console.log(err2);
                }
                else{
                    // console.log("Post req")
                    console.log(orderData);
                }
        
            });
            }
            else{
                Order.findOneAndUpdate({owner:userId},{$push: {items:newOrder}},{safe:true, upsert:true},function(err, orderData){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(orderData);
                    }
                });
            }
    });
    // 
    }); 
  
// })
//Fetch orders for My Cart
router.get('/', (req,res)=>{
    var userId = mongoose.Types.ObjectId(req.headers._id);
    // console.log(req.headers)
    Order.findOne({owner:userId}, function(err,foundOrder){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundOrder);
            res.json({foundOrder});
        }
    });

});

//Delete order from cart
router.delete("/:id",function(req,res){
    var userId = req.headers._id;
    Order.findOneAndUpdate({owner:userId},{$pull: {items: {'item_id': req.params.id}}},{safe:true} ,function(err, deleteData){
        if(err){
            console.log(err);
        }
        else{
            console.log(deleteData);
            console.log('Order deleted');
        }
    });
});

router.delete("/clearcart",(req,res)=>{
    var userId = req.headers._id;
    Order.findOneAndUpdate({owner:userId},{$unset:{items:{}}},(err)=>{
        if(err){
            return res.json({status: "failed",msg: err});
        }
        return res.json({status:"success"});
    });
});
// For frontend axios
// axios.delete(URL, {
//     headers: {
//       Authorization: authorizationToken
//     },
//     data: {
//       source: source
//     }
//   });

module.exports = router;