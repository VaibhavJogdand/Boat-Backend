const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const uri = `mongodb+srv://vrjogdand708:Vaibhav123@e-commerce.3nmbokt.mongodb.net/?retryWrites=true&w=majority`;

app.use(cors());

app.use(express.json());
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");

//Routes
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

app.listen(4000, () => {
	console.log("server is on");
});

module.exports = app;
