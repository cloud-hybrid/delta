import "./index.scss";

// import "react-toastify/dist/ReactToastify.css";

import Styles from "./index.module.scss";

import Properties from "prop-types";

import React from "react";
import ReactDOM from "react-dom";
// import { toast, ToastContainer, Zoom } from "react-toastify";

const Portal = ( { children, className = "notification-portal", element = "div" } ) => {
    const Parent = document.getElementById("Application");

    const container = React.useRef(document.createElement(element));

    React.useEffect(() => {
        container.current.className = className;

        container.current.classList.add(Styles.component);
        Parent.appendChild(container.current);
        return () => {
            Parent.removeChild(container.current);
        }
    }, []);

    return ReactDOM.createPortal(children, container.current)
};

const Component = ( { type, content, theme, duration } ) => {
    const ID = React.useRef(null);

    React.useEffect(() => {
        // toast(content, {
        //     type: type,
        //     theme: theme,
        //     autoClose: ( duration <= 0 || duration === null ) ? false : duration
        // });

        // const dismiss = () => toast.dismiss(ID.current);

        // return () => toast.dismiss();
    }, [ ID ]);

    return (
        <Portal>
            {/* <ToastContainer transition={ Zoom } draggable={ false } autoClose={ duration } pauseOnFocusLoss={ false }/> */}
        </Portal>
    )
};

Component.propTypes = {
    type: Properties.oneOf([ "error", "warning", "info", "default", "successful" ]).isRequired,
    content: Properties.string.isRequired,
    theme: Properties.oneOf([ "light", "dark", "colored" ]).isRequired,
    duration: Properties.number || Properties.exact(null)
};

Component.defaultProps = {
    type: "info",
    content: null,
    theme: "dark",
    duration: 3000
};

export { Component };

export default Component;