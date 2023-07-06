const mongoose = require("mongoose");

// Define the schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	imgUrl: {
		type: String,
	},
	tags: [String],
});

module.exports = mongoose.model("Category", categorySchema);
