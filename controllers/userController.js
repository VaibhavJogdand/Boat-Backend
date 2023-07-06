const User = require("../models/order");

exports.addToCart = (req, res) => {
	const { cartItems } = req.body;

	User.updateOne(id, { cartItems: cartItems })
		.then((res) => {
			res.status(200).json("Items added to cart successfully!");
		})
		.catch((error) => {
			res.status(500).json("something went wrong");
		});
};
