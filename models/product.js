const mongoose = require("mongoose");

// Define the schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	color: {
		type: String,
	},
	image: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
