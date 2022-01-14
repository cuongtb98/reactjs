import {useState ,useCallback} from "react"
import App1 from "./App1"
// su dung useCallback khi component con co su dung memo va duoc truyen props
// useCallback de tranh re-render lai nhung componet ko can thiet


const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(
        () => {
            setCount(prev => prev + 1)
        },
        [],
    )
    return(
        <div>
            <h3>{count}</h3>
            <App1 onIncrement = {handleClick}/>
        </div>
    )
}

export default App