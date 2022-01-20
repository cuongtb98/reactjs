import { useDispatch, useSelector } from 'react-redux'
import './counter.css'
import { increment, decrement } from './counterSlice'
const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter)


    return(
        <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <span>{count.value}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
    )
}

export default Counter