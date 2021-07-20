import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [showCart, setShowCart] = useState(false);

    function showCartHandler() {
        setShowCart(true);
    }

    function hideCartHandler() {
        setShowCart(false);
    }

    return (
        <Fragment>
            {showCart && <Cart hideCart={hideCartHandler} />}
            <Header showCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
