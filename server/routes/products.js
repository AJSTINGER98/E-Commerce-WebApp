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
    res.json({
        page: 'This is the product page of an individual product of brand ' +req.params.category
    });
});




module.exports = router;