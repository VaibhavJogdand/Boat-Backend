const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	phoneNo: {
		type: String,
	},
	cart: [{ itemId: Schema.Types.ObjectId, price: Number }],
	address: {
		type: String,
	},
	profilePic: {
		type: String,
	},
});

module.exports = mongoose.model("Product", productSchema);
