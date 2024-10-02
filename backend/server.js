import express from "express";
import cors from "cors"; // Asegúrate de instalar cors con npm
const port = 5000;

const app = express();

// Middleware
app.use(cors()); // Habilita CORS
app.use(express.json()); // Permite recibir JSON en las solicitudes

app.get("/", (req, res) => {
    res.send("API is running...");
});

// Aquí podrías agregar más rutas
// Ejemplo:
// app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
