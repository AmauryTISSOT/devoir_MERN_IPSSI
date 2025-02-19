import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

/**
 * Récupère le port de l'application depuis le fichier .env - Par défaut 3000
 */
const PORT = process.env.PORT || 3000;

connectDB();

// Route de base
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
