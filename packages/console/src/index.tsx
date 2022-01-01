import "./index.scss";

import React from "react";
import DOM from "react-dom";

import {Application} from "./application";

import {BrowserRouter as Router} from "react-router-dom";

DOM.render(
    <React.StrictMode>
        <Router>
            <Application/>
        </Router>
    </React.StrictMode>,
    document.getElementById("Application"),
);

import("./utilities/vitals").then(($) => {
    $.Vitals().finally(
        () => {
            // ...
        }
    );
});