var express = require("express");
var router = express.Router();

router.get('/', (req,res) =>{
    res.json({
        page: 'This is the home Page',
    });
});

router.get('/news',(req,res) =>{
    var query = News.find({}).sort({_id:-1}).limit(7);
    query.exec((err,News)=>{
        if(err || !News){
            console.log('No News to show');
        } else{
            res.json({News});
        }
    });
});


module.exports = router;