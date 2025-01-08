const mongoose=require("mongoose");
const zod = require("zod");
require('dotenv').config(); 

mongoose.connect(process.env.mongoDbUrl)
const Todo=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todoSchema=mongoose.model('todoSchema',Todo)

module.exports={todoSchema}