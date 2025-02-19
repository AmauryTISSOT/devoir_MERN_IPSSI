import Product from "../models/Products.js";
import fakeProducts from "./fakeProducts.js";
import connectDB from "../config/db.js";
import mongoose from "mongoose";

const seedDb = async () => {
    try {
        await connectDB();
        await Product.deleteMany();
        await Product.insertMany(fakeProducts);
        console.log("Données insérées avec succès");
        mongoose.disconnect();
    } catch (error) {
        console.error("Erreur lors de l'insertion des données :", error);
        mongoose.disconnect();
    }
};

seedDb();
