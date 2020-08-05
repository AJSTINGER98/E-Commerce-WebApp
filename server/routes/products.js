var express = require("express");
var router = express.Router();

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