const express = require("express");
const router = express.Router();
const {
	getAllProducts,
	addNewProduct,
	deleteProduct,
	modifyProduct,
	getProduct,
} = require("../controllers/products");

router.get("/get-all-products", getAllProducts);
router.get("/get-product/:id", getProduct);
router.post("/add-new-product", addNewProduct);
router.post("/delete-product", deleteProduct);
router.post("/modify-product/:productId", modifyProduct);

module.exports = router;
