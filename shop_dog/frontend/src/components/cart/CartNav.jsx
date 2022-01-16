const CartNav = ({cart}) => {
    return (
        <div className="cart-nav_list">
            <p>add_products_...</p>
            <ul>

                {
                    cart.map(itm => {
                        return (
                            <li>
                                <img src={itm.imageUrl} />
                                <div>{itm.name}<sup>{"   ", itm.price}</sup></div>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default CartNav;