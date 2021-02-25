import { Link } from 'react-router-dom'

export default function HomePage({ todos }) {
  return (
    <div>
      <h1>Home</h1>
      <h2>List of Todos!</h2>
      <ul>
        {todos.map(({ todo, id }) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
      <Link to="/create">Write a todo</Link>
    </div>
  )
}
