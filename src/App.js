import { loadFromLocal, saveToLocal } from './lib/localStorage'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'
import AppForm from './components/AppForm'
import HomePage from './pages/HomePage'
import { Switch, Route, useHistory } from 'react-router-dom'

export default function App() {
  const [todos, setTodos] = useState(loadFromLocal('todos') ?? [])
  const { push } = useHistory()

  useEffect(() => {
    saveToLocal('todos', todos)
  }, [todos])

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <HomePage todos={todos} />
        </Route>
        <Route path="/create">
          <AppForm onAddTodo={handleTodo} />
        </Route>
      </Switch>
    </AppLayout>
  )

  function handleTodo(todo) {
    setTodos([{ todo, id: uuidv4() }, ...todos])
    push('/')
  }
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;

  @media (min-width: 600px) {
    background-color: hotpink;
  }
`
