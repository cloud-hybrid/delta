import Properties from "prop-types";

import React, { useState, useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

import { Notification } from "../components/notification/index";

import { Text } from "../components/text";

/*** The Callable Instance of a Stateful Initializer */
type Dispatch<Generic> = ( $: Generic ) => void;

/*** The Running Callable Instance of the Stateful Initializer */
type Mutation<State> = State | ( ( $: State ) => State );

type Binary = Mutation<boolean>;
type Nilible = Mutation<object | null>;
type Intrinsic = Mutation<object | false | null>;

type Loadable = [ Binary, Dispatch<Binary> ];
type Stateful = [ Intrinsic, Dispatch<Intrinsic> ];
type Errorable = [ Nilible, Dispatch<Nilible> ];

interface State {
    Loadable: Loadable;
    Stateful: Stateful;
    Errorable: Errorable;
}

const URL = process.env[ "REACT_APP_API_ENDPOINT" ] + [ "/utility/awaitable?duration", process.env[ "REACT_APP_SIMULATED_AWAIT_DURATION" ] ].join("=");

/**
 * Exportable Page Template Component (and Wrapper)
 *
 * @return {JSX.Element}
 * @constructor
 */

export const Page = ( { children }) => {
    const Location = useLocation();

    const Data: Stateful = useState(false);
    const Throw: Stateful = useState(null);
    const Loading: Loadable = useState(true);

    useEffect(() => {
        console.debug("[Debug] (Page-Loading-Wrapper)", "Initializing Page + Data.");

        const $ = async () => {
            Loading[ 1 ](true);

            try {
                const $ = await fetch(URL).then(( $ ) => $.json());

                Data[ 1 ]($);
                Throw[ 1 ](false);
            } catch (error) {
                const Expression = /((.*)+(:) + ?(.*))/gm;

                const $ = new Error(error);

                const Partials = Expression.exec($?.message);

                const Message = Partials[ Partials.length - 1 ] || error;
                const Type = Partials[ Partials.length - 3 ] || error;

                if (Type === "TypeError") {
                    Throw[ 1 ]({
                        Type: "API-Error", Message: "API Server Unreachable"
                    });
                } else {
                    Throw[ 1 ]({
                        Type, Message
                    });
                }

                console.warn("[Warning] (Page-API-Waiter)", Type === "TypeError" ? "API-Connection-Error" : error);

                Data[ 1 ](null);
            } finally {
                Loading[ 1 ](false);
            }
        };

        console.debug("[Debug] (Page-Loading-Wrapper)", "Successfully Initialized Callable(s).");

        $().finally(() => {
            console.debug("[Debug] (Page-Loading-Wrapper)", "All Wrapper Promise(s) have Settled.");
        });
    }, [ Location ]);

    const Awaitable = () => ( Loading[ 0 ] ) ? ( <Text input={ "Loading ..." }/> ) : null;
    const Content = () => ( Loading[ 0 ] ) ? null : (<Outlet/>);
    const Trace = () => ( Throw[ 0 ] && !Loading[ 0 ] ) ? (
        <Notification type={ "error" } content={ Throw[ 0 ][ "Message" ] } duration={ null } theme={ "dark" }/>
    ) : null;

    return ( Loading[ 0 ] ) && ( <Awaitable/> ) || ( ( Throw[ 0 ] ) ? ( <Trace/> ) : ( <Content/> ) );
};

Page.propTypes = {};

Page.defaultProps = {
    children: null
};

export default Page;
