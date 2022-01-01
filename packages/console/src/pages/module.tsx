import Properties from "prop-types";

import React, {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";

import {Text} from "../components/text";

/*** The Callable Instance of a Stateful Initializer */
type Dispatch<Generic> = ($: Generic) => void;

/*** The Running Callable Instance of the Stateful Initializer */
type Mutation<State> = State | (($: State) => State);

type Binary = Mutation<boolean>;
type Nilible = Mutation<object | null>;
type Intrinsic = Mutation<object | false | null>;

type Loadable = [Binary, Dispatch<Binary>];
type Stateful = [Intrinsic, Dispatch<Intrinsic>];
type Errorable = [Nilible, Dispatch<Nilible>];

interface State {
    Loadable: Loadable;
    Stateful: Stateful;
    Errorable: Errorable;
}

const URL = process.env["REACT_APP_API_ENDPOINT"] + ["/v1/utility/awaitable?duration", process.env["REACT_APP_SIMULATED_AWAIT_DURATION"]].join("=");

/**
 * Exportable Page Template Component (and Wrapper)
 *
 * @return {JSX.Element}
 * @constructor
 */

export const Page = () => {
    const Data: Stateful = useState(false);
    const Error: Stateful = useState(null);
    const Loading: Loadable = useState(true);

    useEffect(() => {
        console.debug("[Debug] (Page-Loading-Wrapper)", "Initializing Page + Data.");

        const $ = async () => {
            Loading[1](true);

            try {
                const $ = await fetch(URL).then(($) => $.json());

                Data[1]($);
                Error[1](false);
            } catch (error) {
                const $ = {
                    column: error?.column,
                    line: error?.line,
                    message: error?.message,
                    stack: error?.stack
                };

                console.error("[Error] Page-Loading-Wrapper", JSON.stringify($, null, 4));

                Data[1](null);
                Error[1]({
                    column: error?.column,
                    line: error?.line,
                    message: error?.message,
                    stack: error?.stack
                });
            } finally {
                Loading[1](false);
            }
        };

        console.debug("[Debug] (Page-Loading-Wrapper)", "Successfully Initialized Callable(s).");

        $().finally(() => {
            console.debug("[Debug] (Page-Loading-Wrapper)", "All Wrapper Promise(s) have Settled.");
        });
    }, []);

    const Awaitable = () => (Loading[0]) ? (<Text input={"Loading ..."}/>) : null;

    const Trace = () => (Error[0] && !Loading[0]) ? (<Text input={"Error ..."}/>) : null;

    const Content = () => (!Loading[0]) && (<Outlet/>);

    return (
        <>
            <Trace/>
            <Awaitable/>
            <Content/>
        </>
    );
};

Page.propTypes = {};

Page.defaultProps = {};

export default Page;