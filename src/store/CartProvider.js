import { useReducer } from "react";
import CartContext from "./cart-context";

const ACTIONS = {
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
};

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

function cartReducer(state, action) {
    if (action.type === ACTIONS.ADD_ITEM) {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        // if item is already in cart - {if true - assign item to 'existingCartItem' constant}
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === ACTIONS.REMOVE_ITEM) {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            // remove item
            // filter() function removes item on false output
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            // decrease amount
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
}

function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    function addCartItemHandler(item) {
        dispatchCartAction({ type: ACTIONS.ADD_ITEM, item: item });
    }

    function removeCartItemHandler(id) {
        dispatchCartAction({ type: ACTIONS.REMOVE_ITEM, id: id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
