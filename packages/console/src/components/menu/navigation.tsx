import "./index.scss";

import Styles from "./index.module.scss";

import React from "react";

import Properties from "prop-types";

const Component = ( { as, children } ) => {
    return React.createElement(as, {
        className: Styles.component,
        children: children
    });
};

Component.propTypes = {
    /*** HTML Element Type-Cast */
    as: Properties.elementType.isRequired,

    /*** Menu JSX Item(s) */
    children: Properties.arrayOf(Properties.node)
};

Component.defaultProps = {
    as: "nav"
};

export default Component;

export { Component as Navigator };
