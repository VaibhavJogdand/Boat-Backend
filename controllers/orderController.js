const mongoose = require("mongoose");
const Order = require("../models/order");

exports.placeNewOrder = (req, res) => {
	const { user, total, items } = req.body;
	console.log(req.body);

	const order = new Order({
		user: user,
		total: total,
		items: items,
	});

	order
		.save()
		.then((result) => {
			return res.status(200).json({ order: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.getAllOrders = (req, res) => {
	Order.find()
		.then((result) => {
			return res.status(200).json({ orders: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.deleteOrder = (req, res) => {
	console.log(req.body);
	const id = req.body.orderId;
	Order.findByIdAndDelete(id)
		.then((result) => {
			return res.status(200).json({ order: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.modifyOrder = (req, res) => {
	console.log(req.body);
	const id = req.params.orderId;
	Order.findByIdAndUpdate(
		id,
		{ $set: req.body },
		{ new: true, useFindAndModify: false }
	)
		.then((result) => {
			return res.status(200).json({ order: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};
