import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();
export const Connection = () => {
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true});
    mongoose.connection.on("connected", () => {
        console.log("DB connected");
    })
    mongoose.connection.on("disconnected", () => {
        console.log("DB disconnected");
    })
    mongoose.connection.on("error", () => {
        console.log("DB error");
    })
}
export default Connection;