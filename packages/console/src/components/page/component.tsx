import "./index.scss";

import Styles from "./index.module.scss";

import {Properties, Strings} from "../imports";

const Component = ({name, children}) => {

    return (
        <div id={Strings.normalize(name, "Page", "Wrapper")} className={Styles.component}>
            {
                children
            }
        </div>
    )
};

Component.propTypes = {
    /*** Page Title */
    name: Properties.string.isRequired,

    /*** Children JSX Components */
    children: Properties.node.isRequired
};

Component.defaultProps = {
    name: null,
    children: null
};

export default Component;

export {Component};