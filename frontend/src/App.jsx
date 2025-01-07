import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todos'
import { useEffect, useState } from 'react'

                                                    
function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    
      fetch("http://localhost:3000/todos").then(async (res)=>{
        const json=await res.json();
        setTodos(json);
      })
    },[])
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos props={todos}></Todos>
    </div>
  )
}

export default App  
