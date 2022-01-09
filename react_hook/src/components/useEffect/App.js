import { useState, useEffect } from 'react'

const App = () => {
    /*
    1. cap nhap state
    2. cap nham DOM mutate
    3. render UI
    4. clean up if depenrence thay doi
    5. goi effect 
    */

    const [type, setType] = useState('Posts');
    useEffect(() => {
        //effect
        console.log("Change Type");

        // clean up
        return () => {
            console.log("Clean up");
        }
    }, [type])
   
    return(
        <div>
            <button onClick={() => setType('Posts')}>Posts</button>
            <button onClick={() => setType('Users')}>Users</button>
            <button onClick={() => setType('Comments')}>Comments</button>
        </div>
    )
}

export default App