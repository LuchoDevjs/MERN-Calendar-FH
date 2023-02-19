import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import { authRoutes } from "./routes/auth.js";
import { dbConnection } from "./databse/config.js";
import { eventsRoutes } from "./routes/events.js";

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

const port = process.env.PORT;

// Directorio publico
app.use(express.static("public"));

// lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoutes);

// Escuchar peticiones
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});
