const mongoose = require("mongoose");
const Product = require("../models/product");

exports.addNewProduct = (req, res) => {
	const { name, category, price, color, image } = req.body;
	console.log(req.body);

	const product = new Product({
		name: name,
		price: price,
		category: category,
		color: color,
		image: image,
	});

	product
		.save()
		.then((result) => {
			return res.status(200).json({ product: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.getAllProducts = (req, res) => {
	Product.find()
		.then((result) => {
			console.log(result);
			return res.status(200).json(result);
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.getProduct = (req, res) => {
	console.log(req.params.id);
	Product.findById(req.params.id)
		.then((result) => {
			console.log(result);
			return res.status(200).json(result);
		})
		.catch((err) => {
			console.log(err);
			return res.status(400).json({ error: err });
		});
};

exports.deleteProduct = (req, res) => {
	console.log(req.body);
	const id = req.body.productId;
	Product.findByIdAndDelete(id)
		.then((result) => {
			return res.status(200).json({ product: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.modifyProduct = (req, res) => {
	console.log(req.body);
	const id = req.params.productId;
	Product.findByIdAndUpdate(
		id,
		{ $set: req.body },
		{ new: true, useFindAndModify: false }
	)
		.then((result) => {
			return res.status(200).json({ product: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};
