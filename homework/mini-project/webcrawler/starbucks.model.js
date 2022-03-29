import mongoose from 'mongoose'

const starBucksSchema = new mongoose.Schema({
    name: String,
    image: String
})

export const Starbucks = mongoose.model("Starbucks", starBucksSchema)