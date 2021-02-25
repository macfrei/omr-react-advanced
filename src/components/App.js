import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from '../lib/localStorage'
import AppForm from './AppForm'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState(loadFromLocal('todos') ?? [])

  useEffect(() => {
    saveToLocal('todos', todos)
  }, [todos])

  return (
    <div>
      <AppForm onAddTodo={handleTodo} />
      <ul>
        {todos.map(({ todo, id }) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </div>
  )

  function handleTodo(todo) {
    setTodos([{ todo, id: uuidv4() }, ...todos])
  }
}

export default App
