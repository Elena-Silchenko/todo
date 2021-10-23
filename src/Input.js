import { useState } from "react"
import { Form, InputGroup, Button } from "react-bootstrap"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Input({ onUpdate }) {
  const [todo, setTodo] = useState('')

  function add(e) {
    e.preventDefault()
    onUpdate(todo)
    setTodo('')
  }

  return (
    <div>
        <Form onSubmit={add}>
          <InputGroup className="d-flex mb-3">
            <div className="d-flex mx-auto">
              <Form.Control
                className="me-3"
                type="text"
                placeholder="What needs to be done?"
                style={{ width: '30em' }}
                value={todo}
                onChange={e => setTodo(e.target.value)}
              />
              <Button type="submit" variant="outline-secondary">
                Add
              </Button>
            </div>
          </InputGroup>
        </Form>
    </div>
  )
}

export default Input