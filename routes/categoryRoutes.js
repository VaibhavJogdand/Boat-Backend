const express = require("express");
const router = express.Router();
const {
	getAllCategories,
	addNewCategory,
	deleteCategory,
	modifyCategory,
} = require("../controllers/categoryController");

router.get("/get-all-categories", getAllCategories);
router.post("/add-new-category", addNewCategory);
router.post("/delete-category", deleteCategory);
router.post("/modify-category/:categoryId", modifyCategory);

module.exports = router;
