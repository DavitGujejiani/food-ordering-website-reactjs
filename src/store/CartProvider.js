import CartContext from "./cart-context";

function CartProvider(props) {
    function addCartItemHandler(item) {
        
    }
    
    function removeCartItemHandler(id) {
        
    }
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider