import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

import {Template} from "./Template";

ReactDOM.render(
    <React.StrictMode>
        <Template/>
    </React.StrictMode>,
    document.getElementById("Application"),
);

import("./utilities/vitals").then(($) => {
    $.Vitals();
});