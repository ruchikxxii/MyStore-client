import classes from './ProductModal.module.css'
import Modal from '../UI/Modal'

const ProductModal = (props) => {
    return (
        <Modal toggle={props.productToggle}>
            <div className={classes.modal}>
                <img src={props.img} />
                <div><h1>{props.title}</h1></div>
                <div><h3>{props.description}</h3></div>
                <div><p className={classes.rating}>Rating : {props.rating}</p></div>
            </div>
        </Modal>
    );
}

export default ProductModal