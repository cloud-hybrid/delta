import PropTypes from "prop-types";

import { default as Template } from "./../../Module";

import { default as Page } from "./Page";

const Component = ({ timeout, description }) => {
    return (
        <Template Page={ Page } description={ description } timeout={ timeout }/>
    );
};

Component.defaultProps = {
    timeout: 1250
};

Component.propTypes = {
    /**
     * Forced Delay during Transition (Units in ms)
     */

    timeout: PropTypes.number.isRequired,

    /***
     * Loading Screen Context
     */

    description: PropTypes.string.isRequired
};

export default Component;