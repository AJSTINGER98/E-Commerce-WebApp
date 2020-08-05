const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    
    image: [
        {
            src : String,
        }, 
    ],
    type: String,
    name: String,
    price: Number,
    currency: String,
    maxq : Number,
    description: String, 
    keyFeatures:[
        {
            key: String,
            value: String
        },
    ],
    
});

module.exports = mongoose.model('Product',productSchema);