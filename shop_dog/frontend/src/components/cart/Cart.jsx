
import { useContext } from "react"
import { cartContext } from "../../App";

const Cart = () => {
    const { cart, setCart } = useContext(cartContext)
    const total = cart.reduce((a,b)=>a+(+b.price), 0)

    const handleCheckout = () =>{
        setCart([])
    }
    return (
        <>  
            <br /><br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((itm, id) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{id+1}</th>
                                <td><img src={itm.imageUrl} style={{
                                    width: 50,
                                    height: 50,
                                    objectFit: "cover"
                                }}/></td>
                                <td>{itm.name}</td>
                                <td>{itm.price}<sup>$</sup></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th>Total: </th>
                        <td></td>
                        <td></td>
                        <td>{total}<sup>$</sup></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td onClick={handleCheckout} className="btn btn-outline-info">Checkout</td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

export default Cart;