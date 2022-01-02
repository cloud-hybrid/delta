import "./index.scss";

import Styles from "./index.module.scss";

import {Link} from "react-router-dom";

const Component = () => {
    return (
        <nav className={Styles.component}>
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/settings"}>
                Settings
            </Link>
        </nav>
    );
};

export default Component;

export {Component};