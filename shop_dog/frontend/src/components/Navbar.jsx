import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../App";
import CartNav from "./cart/CartNav";

const Navbar = () => {
    const { cart } = useContext(cartContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" >
                    Bet
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" >
                                <Link to="/">Home</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" >
                                <Link to="/dogs">Dogs</Link>
                            </a>
                        </li>
                        <li className="nav-item cart-nav">
                            <a className="nav-link" >
                                <Link to="/cart">Cart </Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-minecart" viewBox="0 0 16 16">
                                    <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
                                </svg>
                                <sup>{cart.length}</sup>
                            </a>
                            <CartNav cart={cart}/>
                        </li>



                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    <div className="form_login">
                        <button type="button" class="btn btn-outline-primary"><Link to="/logout">Log out</Link></button>
                        <button type="button" class="btn btn-outline-primary"><Link to="/login">Login</Link></button>
                        <button type="button" class="btn btn-outline-primary"><Link to="/register">Register</Link></button>
                    </div>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;