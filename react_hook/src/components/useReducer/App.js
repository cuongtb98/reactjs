import { useReducer } from "react"

// using useReducer
// 1 init
const init = {
    count: 0
}
// 2 Action
const INCREMENT = 'increment'
const DECREMENT = 'decrement'

// 3 reducer
const reducer = (state, action) => {
    console.log(action, state.count +1);
    switch (action) {

        case 'increment':
            return {count: state.coutn + 1}
        case 'decrement':
            return {count: state.coutn - 1}
        default:
            console.log("kk");
    }
}

// 4 dispatch
const App = () => {
    const [state, dispatch] = useReducer(reducer, init)
 
    return(
        <div>
              <button onClick={()=>dispatch(INCREMENT)}>-</button>    
              <span>{state.count}</span> 
              <button onClick={()=>dispatch(DECREMENT)}>+</button>     
        </div>
    )
}
export default App