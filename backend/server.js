import express from "express";
import Products from "./data/Products"
const port = 5000;

const app = express();

app.get("/", (req, res) => {
    res.send("Api is running...");
});

app.get('/api/Products', (req, res) => {
    res.json(Products);
});
app.get('/api/Products/:id', (req, res) => {
    const Perfume = Products.find((p) => p._id === req.params.id);
    res.json(Perfume)
});
   


app.listen(port , () => console.log(`server running on port ${port}`))
