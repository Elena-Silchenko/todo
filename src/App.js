import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Input from './Input'
import List from './List'
import TodosFooter from './TodosFooter'

function App() {
  const [todo, setTodo] = useState(() => {
    let initTodo = []

    try {
      initTodo = JSON.parse(localStorage.getItem('listTodos'))
    } catch {}

    return initTodo
  })

  const [status, setStatus] = useState('all')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    filterTodo()
  }, [todo, status])

  function filterTodo() {
    switch(status) {
      case 'complited':
        setFiltered(todo.filter(todo => todo.done))
        break
      case 'uncomplited':
        setFiltered(todo.filter(todo => !todo.done))
        break
      default:
        setFiltered(todo)
        break
    }
  }

  function saveTodo(todo) {
    localStorage.setItem('listTodos', JSON.stringify(todo))
    setTodo(todo)
  }  

  function addTodo(title) {
    const newTodo = [...todo, { title: title, done: false }]
    saveTodo(newTodo)
  }

  function replace(item, newItem) {
    const newTodo = todo.map(todoItem => todoItem === item ? newItem : todoItem)
    saveTodo(newTodo)
  }

  function remove(item) {
    const newTodo = todo.filter(e => e !== item)
    saveTodo(newTodo)
  }
    
  return (
    <>
      <div className="d-flex">
        <div className="m-auto">
          <h1 className="fw-lighter text-center mb-3">my todos</h1>
          <Input onUpdate={title => addTodo(title)} />
          <List todo={filtered} replace={replace} remove={remove} />
          <TodosFooter count={todo.length} setStatus={setStatus} status={status} />
        </div>
      </div>
    </>
  )
}

export default App
