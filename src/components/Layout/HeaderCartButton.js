import CartIcon from "../../assets/CartIcon";
import classes from './HeaderCartButton.module.css'
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext)
    return (
        <button className={classes.button} onClick={props.cartToggle}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {ctx.items.length}
            </span>
        </button>
    );
}

export default HeaderCartButton