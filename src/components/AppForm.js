import styled from 'styled-components/macro'

export default function AppForm({ onAddTodo }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Todo:
        <input name="todo" placeholder="Todo?" />
      </label>
    </Form>
  )

  function handleSubmit(event) {
    console.log(event)
    event.preventDefault()
    const form = event.target
    const input = form.elements.todo
    const todo = input.value
    onAddTodo(todo)
    form.reset()
    input.focus()
  }
}

const Form = styled.form`
  display: grid;
  gap: 10px;

  label {
    display: grid;
    gap: 4px;
  }
  input {
    border: 2px solid #bbb;
  }
`
