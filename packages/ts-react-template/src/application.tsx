import { Shell } from "./shell";

import { Route, Routes } from "react-router-dom";

import Home     from "./pages/home";
import Settings from "./pages/settings";
import Mobile   from "./pages/mobile-preview";

const Application = () => {
    return (

        <Routes>
        <Route path={ "*" } element={ <Shell/> }>
            <Route element={ ( <Home/> ) } index/>
            <Route element={ ( <Settings/> ) } path={ "settings" }/>
            <Route element={ ( <Mobile/> ) } path={ "mobile-preview" }/>
        </Route>
        </Routes>

    );
};

export { Application };

export default Application;
