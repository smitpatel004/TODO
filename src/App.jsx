import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [count, setCount] = useState(0)
  const [todo,setTodo] = useState("")
  const [todos,setTodos]=useState([])


  useEffect(()=>{
    let todosString=localStorage.getItem("todos")
    if(todosString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
   
  },[])

  const saveToLS=(params)=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const handleEdit = (e,id)=>{
   let t= todos.filter(i=>i.id===id)
   setTodo(t[0].todo)
   let newTodos = todos.filter(item=>{
    return item.id!==id
  })
  setTodos(newTodos)
  saveToLS()
  }
  const handleDelete = (e,id)=>{
console.log(`thisis id${id}`)
// let index=todos.findIndex(item=>{
//   return item.id===id;
// })


let newTodos = todos.filter(item=>{
  return item.id!==id
})
console.log(newTodos)

setTodos(newTodos)
saveToLS()
    
  }
  const handleAdd = ()=>{
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo("")
    console.log(todos)
  }
  const handleChange = (e)=>{
    // setTodos([...todos,{todo,isCompleted:false}])
    setTodo(e.target.value)
    saveToLS()
   
  }
  const handleCheckbox=(e)=>{
    let id = e.target.name
    // todos.filter()
    let index=todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodos(newTodos)

  }
  return (
    
    <>
    <Navbar></Navbar>
    <div className='container mx-auto  my-5 rounded-xl p-5 bg-violet-100   min-h-[80vh] ' >
      <div className="addtod">
        <h2 className="text-lg font-bold ">Add todo</h2>
        <input type="text"  name={todo.id}  onChange={handleChange}    value={todo}   className='border w-80' />
        <button  onClick={handleAdd}  className='bg-violet-500 hover:bg-green-800 rounded-lg mx-4 text-sm font-bold cursor-pointer p-3 py-1  '>submit</button>
      </div>
    
    

      <h1 className='text-xl font-bold' >your todos</h1>


      <div className='todos' >
{todos.length===0 && <div>NOT TODO</div>}
    {todos.map(item=>{




       return <div  key={item.id} className="todo flex w-1/4 my-3 justify-between ">
        <input  onChange={(e)=>{handleCheckbox(e,item.id)}} type="checkbox"   name={item.id} id="" />
          <div  className={item.isCompleted?"line-through":""} >{item.todo} </div>
    <div className='buttons' > <button  onClick={(e)=>{handleEdit(e,item.id)}}   className='bg-violet-500 hover:bg-green-800 rounded-lg mx-2 text-sm font-bold cursor-pointer p-3 py-1'  >Edit</button>
    <button  onClick={(e)=>{handleDelete(e,item.id)}}   className='bg-violet-500 hover:bg-green-800 rounded-lg mx-2 text-sm font-bold cursor-pointer p-3 py-1'>Delete</button></div>
   
        </div>
            })}
      </div>


      </div> 
    {/* <button onClick={handleEx} > exp</button> */}
 
    </>
  )
}

export default App
