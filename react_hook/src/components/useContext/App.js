import {useState, createContext } from "react"
import App1 from "./App1";
// App -> App1 -> App2 
// cach thong thuong thi phai truyen props tu App -> App1 -> App2
// khi su dung useContext thi ta truyen props truc tiep tu App -> App2
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