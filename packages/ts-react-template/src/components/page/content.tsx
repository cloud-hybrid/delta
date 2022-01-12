import Properties from "prop-types";

import React, { lazy as Split } from "react";

/*** Code Splitting Page Content + Data Fetching */
type Template = typeof import("./component").default;
type Import = React.LazyExoticComponent<Template>;

/*** Split JSX Component */
const Template: Import = Split(() => import("./component"));

const Content = ( { name, children } ) => {
    return (
        <Template name={ name }>
            {
                children
            }
        </Template>
    )
};

Content.propTypes = {
    /*** Page Title */
    name: Properties.string,

    /*** Children JSX Components */
    children: Properties.node.isRequired
};

Content.defaultProps = {
    name: null,
    children: null
};

export default Content;

export { Content };
