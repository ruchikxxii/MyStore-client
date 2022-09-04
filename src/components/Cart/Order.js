import Modal from "../UI/Modal";
import classes from './Order.module.css'


const Order = (props) => {
    return (
        <Modal toggle={props.orderToggle}>
            <div className={classes.order}>
                <h1>Your Order Has been placed!</h1>
                <button onClick={props.orderToggle}>Close</button>
            </div>
        </Modal>
    );
}

export default Order