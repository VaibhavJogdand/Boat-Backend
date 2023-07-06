const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const orderSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	products: [
		{
			productId: Schema.Types.ObjectId,
			price: Number,
		},
	],
	status: {
		type: String,
		required: true,
	},
	total: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Order", orderSchema);
