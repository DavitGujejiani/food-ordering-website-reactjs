import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

function CartButton(props) {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const { items } = useContext(CartContext);
    const cartItemsCount = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        buttonIsHighlighted ? classes.bump : ""
    }`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemsCount}</span>
        </button>
    );
}

export default CartButton;
