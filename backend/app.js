import express from "express";
import productrouter from "./routes/product.route.js";
import userrouter from "./routes/user.route.js";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/himalayanshop")
  .then((conn) => console.log('connected to db at $ {conn.connection.host}'))
  .catch((err) => console.log("Error connecting to db", err.message));

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "server is up and running" });
});

app.use("/api/products", productrouter);
app.use("/api/auth", userrouter);

app.listen(4000, () => console.log("server is up and running"));