import { memo } from "react";

const App1 = ({onIncrement}) => {
    console.log("re-render");
    return(
        <div>    
            <button onClick={onIncrement}>increment</button>        
        </div>
    )
}
export default memo(App1)