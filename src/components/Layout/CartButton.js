import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

function CartButton(props) {
    const itemsCountInCart = useContext(CartContext).totalAmount;
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{itemsCountInCart}</span>
        </button>
    );
}

export default CartButton;
