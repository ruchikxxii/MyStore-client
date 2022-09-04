import Input from '../../UI/Input';
import classes from './ProductForm.module.css'
import { useContext,useState,useRef } from 'react';
import CartContext from '../../../store/cart-context';

const ProductForm = (props) => {
    const ctx = useContext(CartContext)
    const inputRef = useRef();
    const [amountIsValid,setAmountIsValid] = useState(true)

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const amount = +(inputRef.current.value)

        props.addToCart(amount);

    }

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input title='amount' input={{
                id: `amount_${props.id}`,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }} ref={inputRef}/>
            <button type='submit'>+ Add</button>
            {!amountIsValid && <p>Enter a valid amount</p>}
        </form>
    );
}

export default ProductForm;