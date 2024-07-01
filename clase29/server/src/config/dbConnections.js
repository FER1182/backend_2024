import {options} from "./options.js"
import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(options.mongo.url)
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log(error)
    }
}