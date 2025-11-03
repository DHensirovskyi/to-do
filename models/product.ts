import {model, Schema, models} from 'mongoose'

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

export const Product = models.Product || model("Product", productSchema)