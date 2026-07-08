import express from "express";
import servicesRouter from "./routes/services.router.js";

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use("/api/services", servicesRouter);

export default app;

