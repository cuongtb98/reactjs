import { useContext } from "react";
import { themeContext } from "./App"
// App -> App1 -> App2 
const App2 = () => {
    const theme = useContext(themeContext)
    console.log(theme);
    return(
        <div>

        </div>
    )
}

export default App2