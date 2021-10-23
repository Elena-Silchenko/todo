import { Button } from "react-bootstrap"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function TodosFooter({ count, status, setStatus }) {
  return (
    <>
      <div className="d-flex fw-light">
        <div className="d-inline-flex">
          <div className="me-5 p-2">{count} items total</div>
          <Button className="me-3" variant={status === 'all' ? "secondary" : "outline-secondary"} onClick={() => setStatus('all')}>All</Button>
          <Button className="me-3" variant={status === 'uncomplited' ? "secondary" : "outline-secondary"} onClick={() => setStatus('uncomplited')}>Uncomplited</Button>
          <Button className="me-3" variant={status === 'complited' ? "secondary" : "outline-secondary"} onClick={() => setStatus('complited')}>Complited</Button>
        </div>
      </div>
    </>
  )
}

export default TodosFooter