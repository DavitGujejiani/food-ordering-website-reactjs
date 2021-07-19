import classes from "./Modal.module.css";
import Card from "./Card";
import {Fragment} from "react";

function Modal(props) {
    return (
        <Fragment>
            <div className={classes.backdrop} />
            <Card className={classes.modal}>{props.children}</Card>
        </Fragment>
    );
}

export default Modal;
