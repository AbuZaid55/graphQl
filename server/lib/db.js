import mongoose from "mongoose";

const connection = {}

export const connectToDb = async() => {
    if(connection.isConnected) return;
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        connection.isConnected = db.connections[0].readyState
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("No Connection",error);
        throw new Error(error)
    }
}