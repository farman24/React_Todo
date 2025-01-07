const express = require('express')
const app = express()
const {createTodo,updateTodo}=require('./types')
const {todoSchema}=require('./db')
const cors=require("cors")
app.use(express.json());
app.use(cors());



app.post('/todo',async (req, res) => {
    const createPayload=req.body
    const parsedPayload=createTodo.safeParse(createPayload)
    if (!parsedPayload.success){
        res.status(411).json ({
            msg:'invalid input'
        })
        return;
    }
    await todoSchema.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({title:createPayload.title,description:createPayload.description})
})



app.get('/todos',async (req, res) => {
    const todos = await todoSchema.find({})
    res.json(todos)
})



app.post('/completed',async (req, res) => {
    const updatePayload=req.body
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json ({
            msg:'invalid update input'
        })
    }
    const filter= {_id: req.body.id};
    const update= { completed:true};
    await todoSchema.findByIdAndUpdate(filter,update)

    res.json ({
        msg:'todo completed '
    })
})

app.listen(3000);   
//test