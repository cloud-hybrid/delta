import axios from "axios";

import { Inline } from "./../../components/Notifications/Authentication/Informational.js";

import { default as Types } from "prop-types";

import React, { useState, useEffect } from "react";

//import * as Query from "./Query";

const Component = ({ Evaluation }) => {
    const url = process.env.REACT_APP_API_ENDPOINT + "/v1/gitlab/projects/empty";

    const [ data, setData ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const $ = await axios(url);

                setData($);
                setError(false);
            } catch ( error ) {
                console.warn(error);
                setError({
                    column: error?.column,
                    line: error?.line,
                    message: error?.message,
                    stack: error?.stack
                });
            }
            finally {
                setLoading(false);
            }
        };

        fetchData().finally(() => {
            console.debug("[Debug] Loading Complete");
        });
    }, [ url ]);

    const Awaitable = () => (loading) && (<div>...</div>);

    const Error = () => (error && !loading) && (
        <div style={ { marginBottom: "1.0rem" } }>
            <Inline
                kind={ "error" }
                lowContrast={ true }
                role={ "alert" }
                statusIconDescription={ "Status-Icon" }
                iconDescription={ "Close Error Message" }
                title={ "Error" }
                subtitle={ error?.message }
                hideCloseButton={ true }
            />
        </div>
    );

    const Data = () => (data && !loading) && (
        <>
            Complete
        </>
    );

    return (
        <>
            { (<Error/>) }
            { (<Awaitable/>) }
            { (<Data/>) }
        </>
    );
};

Component.propTypes = {
    Evaluation: Types.string
};

export default Component;
