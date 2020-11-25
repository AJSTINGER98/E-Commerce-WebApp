const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    owner_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    order:{
        payment_id:String,
        order_id: String,
        signature: String
    }, 
    address: {
        location: String,
        pincode: Number,
        city: String,
        state: String,
    },
    // owner: String,
	items: [{
        _id: String,
        name: String,
        image: String,
		item_id: String,
		quantity: {type: Number},
		price: {type: Number}
	}]
});

module.exports = mongoose.model('Purchase', purchaseSchema);