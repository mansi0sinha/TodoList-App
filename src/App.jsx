import { useState } from 'react'
import './App.css'
import { Navbar } from './assets/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-400 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'> Add a Todo</h2>
          <input type='text' className='bg-amber-50 w-1/2' />
          <button type='submit' className='bg-violet-950 hover:bg-violet-900 px-3 py-1 text-white text-sm font-bold rounded-md mx-6 '>Add</button>
        </div>
        <h2 className="text-lg font-bold"> Your Todos</h2>

        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="buttons">
              <button className='bg-violet-950 hover:bg-violet-900 px-3 py-1 text-white text-sm font-bold rounded-md mx-1 '>Edit
              </button>
              <button className='bg-violet-950 hover:bg-violet-900 px-3 py-1 text-white text-sm font-bold rounded-md mx-1' >Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
