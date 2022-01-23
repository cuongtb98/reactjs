import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add, deleteTodo, edit } from "./todoSlice"
const Todo = () => {
    const [job, setJob] = useState("")
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const inputRef = useRef()
    const handleAdd = () => {
       dispatch(add(job))
       setJob('')
       inputRef.current.focus()
    }
    return (
        <div>
            <input 
                ref={inputRef}
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <hr />
            <h3>Todo list</h3>
            <ul>
                {
                    todo.map((item, id) => {
                        return (
                            <li key={item, id}>
                                <span>{item}</span>
                                <button onClick={()=> dispatch(deleteTodo(id))} >delete</button>
                                <button onClick={()=> dispatch(edit(id))}>edit</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todo