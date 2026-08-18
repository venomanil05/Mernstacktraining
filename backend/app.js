import express from 'express';
import productrouter from "./routes/product.route.js";

const app = express();



app.use(express.json());


app.get("/", (req, res) => {
    res.send({ message: "server is up and running" });
});



app.use("/api/products",productrouter);

app.listen(4000, () => console.log("server is up and running"));