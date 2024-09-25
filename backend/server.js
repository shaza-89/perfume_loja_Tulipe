import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
const port = process.env.PORT || 5000;

connectDB();   //  connect to MongoDB
const app = express();



app.get("/", (req, res) => {
    res.send("Api is running...");
});

app.use("/api/Perfumes", productRoutes);

app.use(notFound);

app.use(errorHandler);

// app.get("/api/Perfumes", (req, res) => {
//     res.json(Perfumes);
// });

// app.get("/api/Perfumes/:id", (req, res) => {
//     const Perfume = Perfumes.find((p) => p._id === req.params.id);
//     res.json(Perfume);
// });




app.listen(port , () => console.log(`server running on port ${port}`))