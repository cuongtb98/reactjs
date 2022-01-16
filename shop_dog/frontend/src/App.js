import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Dogs from "./components/dogs/Dogs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios"
import { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
export const cartContext = createContext([{}])
const App = () => {
    const [dogs, setDogs] = useState([]);
    
    const [cart, setCart] = useState([]);
    // const [total, setTotal] = useState();
    useEffect(() => {
        async function getData(){
            const res = await axios.get("/v1/dogs");
            return res;
        }
        getData()
            .then(res => setDogs(res.data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <cartContext.Provider value={{cart, setCart}}>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dogs" element={<Dogs dogs={dogs}/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
        </cartContext.Provider>
    )
}

export default App