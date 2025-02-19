const express = require("express");
const app = express();

const PORT = 3000;

// Route de base
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
