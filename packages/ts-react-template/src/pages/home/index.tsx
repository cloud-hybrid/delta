import Properties from "prop-types";

import React, { Suspense, lazy as Split } from "react";

type Import = React.LazyExoticComponent<typeof import("./../../components/page/content").Content>;

const Content: Import = Split(() => import("./../../components/page/content"));

import { XTerm as Terminal } from "./../../components/tty";

const Page = ( { name } ) => {
    return (
        <Suspense fallback={ null }>
            <Content name={ name }>
                {
                    name
                }
                <Terminal/>
            </Content>
        </Suspense>
    )
};

Page.propTypes = {
    /*** Page Title */
    name: Properties.string
};

Page.defaultProps = {
    name: "Home"
};

export default Page;

export { Page };
