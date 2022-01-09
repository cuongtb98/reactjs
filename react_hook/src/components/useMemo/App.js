import { useState, useMemo } from 'react'

const App = () => {
    const slowFunction = (num) => {
        console.log('slowFunction');
        return num * 2
    }
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    
    const themStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return (
        <div>
            <input type='number' value={number} onChange={e=> setNumber(e.target.value)} /><br />
            <button onClick={()=>setDark(prev=> !prev)}>Chane Theme</button><br />
            <div style={themStyle}>{doubleNumber}</div>
        </div>
    )
}


export default App