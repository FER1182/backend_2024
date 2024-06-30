import mongoose from "mongoose"

const businesesSchema = new mongoose.Schema({
    name:String,
    product: []
})

export const businesesModel = mongoose.model("busineses",businesesSchema)