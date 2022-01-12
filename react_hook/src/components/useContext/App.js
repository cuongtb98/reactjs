import {useState, createContext } from "react"
import App1 from "./App1";
// App -> App1 -> App2 
export const themeContext = createContext()

const App = () => {
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        setTheme(prev => !prev)
    }
    // console.log(theme);
    return(
        <themeContext.Provider value={theme}>
            <div>
                <button onClick={toggleTheme}>Toggle</button>
                <App1 />
            </div>
        </themeContext.Provider>
    )
}

export default App