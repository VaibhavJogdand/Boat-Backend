const express = require("express");
const router = express.Router();
const {
	getAllOrders,
	placeNewOrder,
	deleteOrder,
	modifyOrder,
} = require("../controllers/orderController");

router.get("/get-all-orders", getAllOrders);
router.post("/place-new-order", placeNewOrder);
router.post("/delete-order", deleteOrder);
router.post("/modify-order/:orderId", modifyOrder);

module.exports = router;
