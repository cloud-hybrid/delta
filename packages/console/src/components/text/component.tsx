import "./index.scss";

import Properties from "prop-types";

import Styles from "./index.module.scss";

const Component = ({input}) => {
    return (
        <span className={Styles.component}>
            {
                input
            }
        </span>
    )
};

Component.propTypes = {
    /*** Component Display Text */
    input: Properties.string.isRequired
};

Component.defaultProps = {
    input: "..."
};

export default Component;

export {Component};