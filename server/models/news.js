const mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
    
    image: [
        {
            src : String,
        }, 
    ],
    content: String,
    title: String
});

module.exports = mongoose.model('News',newsSchema);