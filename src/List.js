import { CloseButton, FormControl, InputGroup } from "react-bootstrap"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function List({ todo, replace, remove }) {
  return (
    <>
      <div>
        {
          todo.map((e, index) => (
            <div className="mb-3" key={index}>
              <InputGroup className={`todo-item ${e.done ? 'done' : ''}`}>
                <InputGroup.Checkbox className="done" checked={e.done} onChange={event => replace(e, { ...e, done: event.target.checked })} />
                <FormControl className="me-3" value={e.title} onChange={event => replace(e, { ...e, title: event.target.value }) } />
                <CloseButton onClick={() => remove(e)} />
              </InputGroup>
            </div>
          ))
        }
      </div>
     
    </>
  )
}

export default List