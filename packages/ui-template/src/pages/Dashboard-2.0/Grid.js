import "./Grid.css";
import { useState } from "react";

import { Panel } from "./Panel.js";
import { default as Content } from "./Content.js";

import * as Shell from "./Shell.js";

const Layout = ({ children }) => {
    const Sidebar = useState("expansion"); // expansion || rail

    return (
        <div className={ "io-dashboard-grid" }>
            <div className={ [ "io-dashboard-column", "io-dashboard-panel" ].join(" ") } data-state={ Sidebar[0] }>
                <Panel State={ Sidebar }/>
            </div>
            <div className={ [ "io-dashboard-column", "io-dashboard-page" ].join(" ") }>
                <Content duration={ 1 }/>
            </div>
        </div>);
};

export default Layout;