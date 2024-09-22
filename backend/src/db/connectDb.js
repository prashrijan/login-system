import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDb(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database connected successfully ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection error: ",error);
        process.exit(1)
    }
} 

export default connectDb