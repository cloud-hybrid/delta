import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { CodeSnippet, CodeSnippetSkeleton } from "@carbon/react";

import { Inline } from "./../../../components/Notifications/Authentication/Informational.js";

import axios from "axios";

import "./SCSS/Snippet.scss";
import * as Styles from "./SCSS/Snippet.module.scss";

const Component = () => {
    const url = "https://localhost:3000/API/Awaitable?Time=1";

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

    const Awaitable = () => (loading) && (<CodeSnippetSkeleton type={ "multi" }/>);

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
        <CodeSnippet
            type={ "multi" }
            className={ Styles.snippet }
            children={
                JSON.stringify(data, null, 4)
            }
            showMoreText={ "Expand" }
            showLessText={ "Collapse" }
            maxCollapsedNumberOfRows={ 15 }
            wrapText={ false }
        />
    );

    return (
        <>
            { (<Error/>) }
            { (<Awaitable/>) }
            { (<Data/>) }
        </>
    );
};

Component.propTypes = {};

export default Component;