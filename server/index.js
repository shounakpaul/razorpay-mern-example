const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoute = require("./router");
//Initialize App
const app = express();
app.use(cors());

// Setting up enivronment variables
dotenv.config();

//Middlewares
app.use(express.json());

//Routing
app.use("/api/payment/", paymentRoute);

//Listening App
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening port ${port}`));
