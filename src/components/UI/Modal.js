import classes from './Modal.module.css'
import {Fragment} from 'react'
import ReactDom from 'react-dom'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.toggle}/>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalLocation = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop toggle={props.toggle}/>,portalLocation)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalLocation)}
        </Fragment>
    );
}

export default Modal;