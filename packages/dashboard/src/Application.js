import React, { useEffect, useState, lazy as Import, Suspense } from "react";

import { Grid, Column, Row } from "@carbon/react";

import { Route, Routes, useLocation } from "react-router-dom";

import { default as Menu } from "./components/Menu";
import { default as Spinner } from "./components/Loader";

import { Authorizer, JWT, Validate } from "./components/Authenticate";

const Template = Import(() => import("./pages/Template"));

import { default as Home } from "./pages/Home";

import "./Application.scss";

const Application = () => {
    const location = useLocation();
    const Authorization = useState(null);

    useEffect(() => {
        const Token = async (Authorization) => {
            const $ = await JWT();

            const Validation = (
                $ !== null
            ) ? await Validate($) : null;
            Authorization[1](Validation?.Status?.Code === 200);

            console.debug("[Debug]", "Validation", Validation, $);
        };

        Token(Authorization).catch((e) => {
            console.warn("[Warning]", "Authentication (Application) Authorization Error");
            throw new Error(JSON.stringify(e, null, 4));
        });
    }, []);

    return (
        <React.StrictMode>
            <Menu Authorizer={ Authorization }/>
            <Grid>
                <Column lg={ 16 } md={ 8 } sm={ 4 }>
                    <Routes basename={ "/" }>
                        <Route
                            element={
                                <Spinner timeout={ 1250 } description={ "Establishing Secure Context ..." }>
                                    <Home/>
                                </Spinner>
                            } path={ "/" }
                        />
                    </Routes>
                </Column>
            </Grid>
            {/* <BTT/> // @Task: Fix Issue(s) with Page Bottom-Margin(s) & Z-Index(es) */ }
        </React.StrictMode>
    );
};

export default Application;
