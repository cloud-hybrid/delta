import "./index.scss";

import Styles from "./index.module.scss";

import Properties from "prop-types";

import { Link } from "react-router-dom";

import { Strings } from "../imports";

const Component = ( { paths, title, overwrite } ) => {
    const Path = ( paths ) ? Strings.formalize(title, paths) : Strings.formalize(title);

    return (
        <Link to={ ( overwrite ) ? overwrite : Path } className={ Styles.item }>
            <span>
                {
                    title
                }
            </span>
        </Link>
    );
};

Component.propTypes = {
    /*** Global Menu Item Path Prefix(es) */
    paths: Properties.arrayOf(Properties.string) || Properties.string,
    /*** Global Menu Item Title, Text */
    title: Properties.string.isRequired,
    /*** Optional Path Forced Overwrite */
    overwrite: Properties.string
};

Component.defaultProps = {
    paths: [ "" ]
};

export default Component;

export { Component as Item };