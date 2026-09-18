import { useState } from 'react'
import './App.css'
import { Navbar } from './assets/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
 const handleCheckbox = (e) => {
  let id = e.target.name;

  console.log(`the id is ${id}`);

  let newTodos = todos.map(item => {
    if (item.id === id) {
      return {
        ...item,
        isCompleted: !item.isCompleted
      };
    }

    return item;
  });

  setTodos(newTodos);
};

  return (
    <><Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-400 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'> Add a Todo</h2>
          <input onChange={handleChange} value={todo} type='text' className='bg-amber-50 w-1/2' />
          <button type='submit' className='bg-violet-950 hover:bg-violet-900 px-3 py-1 text-white text-sm font-bold rounded-md mx-6 ' onClick={handleAdd}>Add</button>
        </div>
        <h2 className="text-lg font-bold"> Your Todos</h2>

        <div className="todos">
          {todos.map(item => {
            return <div className="todo flex w-1/2 justify-between my-3" key={item.id}>
              <input
  type="checkbox"
  onChange={handleCheckbox}
  checked={item.isCompleted}
  name={item.id}
/>
              <div className={item.isCompleted ? "line-through" : ""}>
                {item.todo}
              </div>
              <div className="buttons">
                <button className='bg-violet-950 hover:bg-violet-900 px-3 py-1 text-white text-sm font-bold rounded-md mx-1 ' onClick={handleEdit}>Edit
                </button>
                <button className='bg-violet-950 hover:bg-violet-900 px-3 py-1 text-white text-sm font-bold rounded-md mx-1' onClick={handleDelete} >Delete
                </button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
