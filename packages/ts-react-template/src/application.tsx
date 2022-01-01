import {Routes, Route} from "react-router-dom";

import {Menu} from "./components/menu";
import {Footer} from "./components/footer";
import {Container} from "./components/container";

import {Page} from "./pages/module";

import Home from "./pages/home";

const Application = () => {
    return (
        <>
            <Menu/>
            <Container>
                <Routes>
                    <Route path={"/"} element={(<Page/>)}>
                        <Route element={(<Home/>)} index/>
                    </Route>
                </Routes>
            </Container>
            <Footer/>
        </>
    );
};

export {Application};

export default Application;
