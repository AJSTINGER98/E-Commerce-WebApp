const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	// owner: String,
	items: [{
        name: String,
        image: String,
		item_id: String,
		quantity: {type: Number, default: 1},
		price: {type: Number, default: 0}
	}]
});

module.exports = mongoose.model('Order', orderSchema);