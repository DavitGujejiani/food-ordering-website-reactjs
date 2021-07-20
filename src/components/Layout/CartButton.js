import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";

function CartButton(props) {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}

export default CartButton;
