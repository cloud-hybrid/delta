import Properties from "prop-types";

import { Routes } from "react-router-dom";

import { Menu } from "./components/menu";
import { Container } from "./components/container";
import { Footer } from "./components/footer";

const Shell = ( { children } ) => {
    return (
        <>
            <Menu/>
            <Container>
                <Routes>
                    {
                        children
                    }
                </Routes>
            </Container>
            <Footer/>
        </>
    );
};

Shell.propTypes = {
    /*** Children JSX Components */
    children: Properties.node.isRequired
};

Shell.defaultProps = {
    children: null
};

export default Shell;

export { Shell };