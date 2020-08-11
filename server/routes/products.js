const express      = require("express");
const router       = express.Router();
const Products     = require("../models/products");

//  All products
router.get('/', (req,res) =>{
    var itemsPerPage = 12;
    var pageNum = 1;
    if(req.query.page){
        pageNum = req.query.page;
    }
    Products.find({},{currency:1,price:1,image:1,name:1, _id:1},{skip: (itemsPerPage * (pageNum-1)), limit: itemsPerPage},(err, allProducts)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(allProducts);
            res.json({allProducts});
        }
    });
});
// Latest Products
router.get('/latest', (req,res)=>{
    query= Products.find({},{currency:1,price:1,image:1,name:1, _id:1}).sort({_id:-1}).limit(8);
    query.exec(function(err, latestProducts) {
        if (err) { 
            console.log(err)
        }
        else{
            res.json({latestProducts})
        }
})
})

// Particular Category
router.get('/:category', (req,res) =>{
    res.json({
        page: 'This is the Products Page of '+req.params.category+ ' brand',
    });
});

// Particular Product
router.get('/:category/:id', (req,res) =>{
    Products.findById({type: req.params.category,_id: req.params.id}, function(err,prodOne){
        if(err){
            console.log(err);
        }
        else{
            console.log(prodOne);
            res.json({prodOne});
        }
    });
});




module.exports = router;