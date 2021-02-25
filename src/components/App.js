import { loadFromLocal, saveToLocal } from '../lib/localStorage'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AppForm from './AppForm'
import HomePage from './HomePage'
import styled from 'styled-components/macro'

export default function App() {
  const [todos, setTodos] = useState(loadFromLocal('todos') ?? [])

  useEffect(() => {
    saveToLocal('todos', todos)
  }, [todos])

  return (
    <AppLayout>
      <HomePage todos={todos} />
      <AppForm onAddTodo={handleTodo} />
    </AppLayout>
  )

  function handleTodo(todo) {
    setTodos([{ todo, id: uuidv4() }, ...todos])
  }
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
