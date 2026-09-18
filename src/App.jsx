import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './assets/Navbar'
import { v4 as uuidv4 } from 'uuid'
import { MdDelete, MdEdit, MdAddTask } from 'react-icons/md'

function App() {
  const [todo, setTodo] = useState("")
  const [showFinished, setShowFinished] = useState(false)

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleEdit = (id) => {
    const t = todos.find(item => item.id === id)

    if (t) {
      setTodo(t.todo)
      setTodos(todos.filter(item => item.id !== id))
    }
  }

  const handleDelete = (id) => {
    const confirmed = confirm(
      "Are you sure you want to delete this todo?"
    )

    if (confirmed) {
      setTodos(todos.filter(item => item.id !== id))
    }
  }

  const handleAdd = () => {
    if (todo.trim().length > 3) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          todo: todo.trim(),
          isCompleted: false
        }
      ])

      setTodo("")
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    const id = e.target.name

    setTodos(
      todos.map(item =>
        item.id === id
          ? {
              ...item,
              isCompleted: !item.isCompleted
            }
          : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">

      <Navbar />

      <main className="container mx-auto my-8 px-4">

        {/* Main Todo Container */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-violet-200 p-6 shadow-lg">

          {/* Heading */}
          <div className="mb-6 text-center">

            <h1 className="text-3xl font-bold">
              My Todo List
            </h1>

            <p className="mt-1 text-sm text-gray-600">
              Organize your tasks and stay productive
            </p>

          </div>


          {/* Add Todo */}
          <div className="mb-8">

            <h2 className="mb-2 text-xl font-bold">
              Add a Todo
            </h2>

            <div className="flex gap-3">

              <input
                onChange={handleChange}
                value={todo}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAdd()
                  }
                }}
                type="text"
                placeholder="Enter your todo..."
                className="flex-1 rounded-lg border border-violet-300 bg-white px-4 py-2 outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-300"
              />

              <button
                onClick={handleAdd}
                disabled={todo.trim().length <= 3}
                className="flex min-w-28 items-center justify-center gap-2 rounded-lg bg-violet-950 px-5 py-2 font-bold text-white transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                <MdAddTask size={20} />
                Save
              </button>

            </div>

            {todo.length > 0 && todo.trim().length <= 3 && (
              <p className="mt-2 text-sm text-red-600">
                Todo must contain more than 3 characters.
              </p>
            )}

          </div>


          {/* Todo Header */}
          <div className="mb-4 flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Your Todos
            </h2>

            <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">

              <input
                type="checkbox"
                checked={showFinished}
                onChange={() => setShowFinished(!showFinished)}
                className="h-4 w-4 accent-violet-950"
              />

              Show Finished

            </label>

          </div>


          {/* Todos */}
          <div className="space-y-3">

            {todos.length === 0 && (
              <div className="rounded-lg bg-white p-6 text-center font-medium text-gray-500">
                No Todos to display
              </div>
            )}

            {todos.length > 0 &&
              todos
                .filter(item => showFinished || !item.isCompleted)
                .map(item => (

                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                  >

                    {/* Todo text */}
                    <div className="flex min-w-0 items-center gap-3">

                      <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        checked={item.isCompleted}
                        name={item.id}
                        className="h-5 w-5 cursor-pointer accent-violet-950"
                      />

                      <span
                        className={`break-words text-base ${
                          item.isCompleted
                            ? "text-gray-400 line-through"
                            : "text-gray-800"
                        }`}
                      >
                        {item.todo}
                      </span>

                    </div>


                    {/* Buttons */}
                    <div className="ml-4 flex shrink-0 gap-2">

                      <button
                        onClick={() => handleEdit(item.id)}
                        title="Edit todo"
                        className="flex items-center justify-center rounded-lg bg-violet-700 p-2 text-white transition hover:bg-violet-800"
                      >
                        <MdEdit size={19} />
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        title="Delete todo"
                        className="flex items-center justify-center rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700"
                      >
                        <MdDelete size={19} />
                      </button>

                    </div>

                  </div>

                ))}

          </div>


          {/* Finished count */}
          {todos.length > 0 && (
            <div className="mt-5 text-sm text-gray-600">
              Completed:{" "}
              {todos.filter(item => item.isCompleted).length}
              {" / "}
              {todos.length}
            </div>
          )}

        </div>

      </main>

    </div>
  )
}

export default App