import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


async function connectDb(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
} 

export default connectDb