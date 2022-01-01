import "./index.scss";

import Styles from "./index.module.scss";

import {Link} from "react-router-dom";

const Component = () => {
    return (
        <nav className={Styles.component}>
            <Link to={"/"}>
                Test
            </Link>
        </nav>
    )
};

export default Component;

export {Component};