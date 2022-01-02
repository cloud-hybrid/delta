import {Shell} from "./shell";
import {Page} from "./pages/module";
import {Route} from "react-router-dom";

import Home from "./pages/home";
import Settings from "./pages/settings";

const Application = () => {
    return (
        <Shell>
            <Route path={"/"} element={(<Page/>)}>
                <Route element={(<Home/>)} index/>
                <Route element={(<Settings/>)} path={"settings"}/>
            </Route>
        </Shell>
    );
};

export {Application};

export default Application;
