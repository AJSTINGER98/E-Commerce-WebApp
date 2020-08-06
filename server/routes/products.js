const express      = require("express");
const router       = express.Router();
const Products     = require("../models/products");

router.get('/', (req,res) =>{
    res.json({
        page: 'This is the All Products Page',
    });
});

router.get('/:category', (req,res) =>{
    res.json({
        page: 'This is the Products Page of '+req.params.category+ ' brand',
    });
});

router.get('/:category/:id', (req,res) =>{
    Products.findById({type: req.params.category,_id: req.params.id}, function(err,prodOne){
        if(err){
            console.log(err)
        }
        else{
            console.log(prodOne)
            res.json({prodOne})
        }
    })
});




module.exports = router;