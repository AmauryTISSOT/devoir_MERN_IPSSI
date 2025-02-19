import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.DB_URI);
        console.log(
            "MongoDB connecté avec Docker Compose 🚀 sur le port :",
            connection.port
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
