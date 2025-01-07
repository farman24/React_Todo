import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description,setdescription]=useState("")
    return (
        <div>
            <input style={{padding:10,margin:10}} type="text" placeholder='title' onChange={
                function(e){
                    setTitle(e.target.value);
                }
            }></input>
            <input style={{padding:10,margin:10}} type="text" placeholder='description' onClick={
                function(e){
                    setdescription(e.target.value);
                }
            }></input>
            <button  style={{padding:5,margin:5}}onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }) ,
                        headers:{
                            "Content-type":"application/json"
                        }
                    
                }).then(async function(ee)  {
                    fetch("http://localhost:3000/todos").then(async (ee)=>{
                        const json=await ee.json();
                        setTodos(json);
                      })
                })
            }}>Add a todo</button>
        </div>
    )
}