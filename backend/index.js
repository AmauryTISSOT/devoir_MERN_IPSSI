require("dotenv").config();
const express = require("express");
const app = express();

/**
 * Récupère le port de l'application depuis le fichier .env - Par défaut 3000
 */
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

mongoose
    .connect("mongodb://admin:secret@localhost:27017/")
    .then(() => console.log("MongoDB connecté avec Docker Compose 🚀"))
    .catch((err) => console.error("Erreur de connexion", err));

// Route de base
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
