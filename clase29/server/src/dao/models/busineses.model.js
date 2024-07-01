import mongoose from "mongoose"

const businesesSchema = new mongoose.Schema({
    name:String,
    products: []
})

export const businesesModel = mongoose.model("busineses",businesesSchema)