import express from "express";
import Perfumes from './data/Products.js'
const port = 5000;

const app = express();

app.get("/", (req, res) => {
    res.send("Api is running...");
});

app.get("/api/Perfumes", (req, res) => {
    res.json(Perfumes);
});

app.get("/api/Perfumes/:id", (req, res) => {
    const Perfume = Perfumes.find((p) => p._id === req.params.id);
    res.json(Perfume);
});


app.listen(port , () => console.log(`server running on port ${port}`))
