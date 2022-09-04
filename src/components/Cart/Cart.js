import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
    const ctx = useContext(CartContext)

    const CartItemRemoveHandler = (id)=>{
        ctx.removeItem(id)
    }
    const CartItemAddHandler = (item) => {
        ctx.addItem({...item,amount:1});
    }

    const MapedCartItems = <ul className={classes['cart-items']}>{ctx.items.map((item)=>{
        return <CartItem key={item.id} id={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={CartItemRemoveHandler.bind(null,item.id)} onAdd={CartItemAddHandler.bind(null,item)}/>
    })}</ul>

    const OrderHandler = () => {
        props.cartToggle();
        ctx.clearCart();
        props.orderToggle();
    }

    return (
        <Modal toggle={props.cartToggle}>
            {MapedCartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.cartToggle}>Close</button>
                {!(ctx.items.length===0) && <button className={classes.button} onClick={OrderHandler}>Order</button>}
            </div>
        </Modal>
    );

}

export default Cart