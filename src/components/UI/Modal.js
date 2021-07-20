import ReactDOM from "react-dom";
import cls from "./Modal.module.css";
import { Fragment } from "react";

function Backdrop() {
    return <div className={cls.backdrop} />;
}

function ModalOverlay(props) {
    return (
        <div className={cls.modal}>
            <div className={cls.content}>{props.children}</div>
        </div>
    );
}

function Modal(props) {
    const overlaysElement = document.getElementById("overlays");

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, overlaysElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                overlaysElement
            )}
        </Fragment>
    );
}

export default Modal;
