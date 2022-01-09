import { useState, useReducer } from "react"
import Todo from "./Todo"
export const ACTION = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newJob(action.payload.name)]
    case ACTION.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTION.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

const newJob = (name) => {
  return {
    id: Date.now(),
    name: name,
    complete: false
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState();

  const handleSubit = (e) => {
    e.preventDefault()
    dispatch({
      type: ACTION.ADD_TODO,
      payload: {
        name: name
      }
    })
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}

        />
      </form>
      {
        todos.map(todo => {
          return (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          )
        })
      }
    </>

  )
}

export default App