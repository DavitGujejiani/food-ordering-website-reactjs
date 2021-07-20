import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
    const cartItems = [
        { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    ].map((item) => <li>{item.name}</li>);

    return (
        <Modal onClick={props.hideCart}>
            <div>
                <ul className={classes["cart-items"]}>{cartItems}</ul>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.hideCart}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    );
}

export default Cart;
