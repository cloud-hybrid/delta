import Properties from "prop-types";

import {default as Template} from "../../components/page";

const Content = ({name, children}) => {
    return (
        <Template name={name}>
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
    name: "Home",
    children: null
};

export default Content;

export {Content};