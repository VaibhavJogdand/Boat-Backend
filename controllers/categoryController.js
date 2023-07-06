const mongoose = require("mongoose");
const Category = require("../models/category");

exports.addNewCategory = (req, res) => {
	const { name, imgUrl, tags } = req.body;
	console.log(req.body);

	const category = new Category({
		name: name,
		imgUrl: imgUrl,
		tags: tags,
	});

	category
		.save()
		.then((result) => {
			return res.status(200).json({ category: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.getAllCategories = (req, res) => {
	Category.find()
		.then((result) => {
			return res.status(200).json(result);
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.deleteCategory = (req, res) => {
	console.log(req.body);
	const id = req.body.orderId;
	Category.findByIdAndDelete(id)
		.then((result) => {
			return res.status(200).json({ category: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};

exports.modifyCategory = (req, res) => {
	console.log(req.body);
	const id = req.params.categoryId;
	Category.findByIdAndUpdate(
		id,
		{ $set: req.body },
		{ new: true, useFindAndModify: false }
	)
		.then((result) => {
			return res.status(200).json({ category: result });
		})
		.catch((err) => {
			return res.status(400).json({ error: err });
		});
};
