import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    function cartItemRemoveHandler(id) {

    }
    function cartItemAddHandler(item) {

    }

    const cartItems = cartCtx.items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            removeItem={cartItemRemoveHandler.bind(null, item.id)}
            addItem={cartItemAddHandler.bind(null, item)}
        />
    ));

    return (
        <Modal onClick={props.hideCart}>
            <div>
                <ul className={classes["cart-items"]}>{cartItems}</ul>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button
                        className={classes["button--alt"]}
                        onClick={props.hideCart}
                    >
                        Close
                    </button>
                    {hasItems && (
                        <button className={classes.button}>Order</button>
                    )}
                </div>
            </div>
        </Modal>
    );
}

export default Cart;
