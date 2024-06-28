import mongoose from "mongoose";
import { options } from "./config.js";

export const connectDB = async () => {
  try {
    
    await mongoose.connect(options.mongo.url);
  
} catch (error) {
      console.log(error )
}
};
