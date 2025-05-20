import { Schema,model } from "mongoose";

let dressSchema = new Schema({
    image: String,
    title: String,
    price: Number
})

export let dressModel = model("dress",dressSchema)