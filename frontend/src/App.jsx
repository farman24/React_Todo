import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { useEffect, useState } from 'react'

                                                    
function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    reloadPage();
    },[])
    async function reloadPage(){
      fetch("http://localhost:3000/todos").then(async (res)=>{
        const json= await res.json();
        setTodos(json);
      })
    }
  return (
    <div>
      <CreateTodo reloadPage={reloadPage}></CreateTodo>
      <Todos props={todos}></Todos>
    </div>
  )
}

export default App  
