const express      = require("express");
const router       = express.Router();
const Order     = require("../models/order");

// Add orders to DB
router.post('/', (req,res)=>{
    // item=JSON.parse(req.body)r
    // console.log(req.body.data)
    var newOrder={name: req.body.data.name, image:req.body.data.image, item_id: req.body.data.item, quantity: req.body.data.quantity, price:req.body.data.price};
    Order.findOneAndUpdate({owner:'123456789'},{$push: {items:newOrder}},{safe:true, upsert:true},function(err, orderData){
        if(err){
            console.log(err);
        }
        else{
            console.log(orderData);
        }
    });

});

//Fetch orders for My Cart
router.get('/', (req,res)=>{
    Order.findOne({owner:'123456789'}, function(err,foundOrder){
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
    
    Order.updateOne({owner:'123456789'},{$pull: {'item_id': req.body.item_id} } ,function(err, deleteData){
        if(err){
            console.log(err);
        }
        else{
            console.log(deleteData);
            console.log('Order deleted');
        }
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