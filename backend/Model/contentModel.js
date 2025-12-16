const { text } = require("express");
const { Schema, model } = require("mongoose");
const contentSchema = new Schema(
  {
    title: { 
        type: String,
         required: true
         },
    description: {
         type: String, 
         required: true 
        },
    contentType: {
         type: String, 
         required: true
         },
    language: { 
        type: String, 
        required: true 
    },
    document: { 
        type: String, 
        required: true 
    },
    region: {
         type: String, 
         required: true
         },
    cultureTag: {
         type: String, 
         required: true 
        },
    price: {
         type: String, 
         required: true
         },
  },
  { timestamps: true }
);
module.export =mongoose.model('content',contentSchema);
