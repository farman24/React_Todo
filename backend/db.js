const mongoose=require("mongoose");
const zod = require("zod");
mongoose.connect(process.env.mongoUrl)
const Todo=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todoSchema=mongoose.model('todoSchema',Todo)

module.exports={todoSchema}