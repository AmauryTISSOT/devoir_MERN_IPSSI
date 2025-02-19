import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    slug: String,
    price: Number,
    description: String,
    images: [String],
    creationAt: Date,
    updatedAt: Date,
    category: {
        id: Number,
        name: String,
        slug: String,
        image: String,
        creationAt: Date,
        updatedAt: Date,
    },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
