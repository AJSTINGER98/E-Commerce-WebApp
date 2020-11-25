const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    order_id: String,
	owner: { 
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        address: {
            location: String,
            pincode: Number,
            city: String,
            state: String,
        },
        phone: Number
    },
    // owner: String,
	items: [{
        name: String,
        image: String,
		item_id: String,
		quantity: {type: Number, default: 1},
		price: {type: Number, default: 0}
	}]
});

module.exports = mongoose.model('Purchase', purchaseSchema);