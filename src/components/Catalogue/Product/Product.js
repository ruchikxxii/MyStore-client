import classes from './Product.module.css'
import ProductForm from './ProductForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const Product = (props) => {

    const ctx = useContext(CartContext)

    const addToCartHandler = (amt)=>{
        ctx.addItem({amount:amt,price:props.price,name:props.name,id:props.id})
    }

    return (
        <li className={classes.meal}>
            <div onClick={props.onClick.bind(null,props.id)}>
                <img src={props.img} className={classes.productImage}></img>
                <h3>{props.name}</h3>
                <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
            </div>
            <div>
                <ProductForm id={props.id} addToCart={addToCartHandler}/>
            </div>
        </li>
    );
}

export default Product