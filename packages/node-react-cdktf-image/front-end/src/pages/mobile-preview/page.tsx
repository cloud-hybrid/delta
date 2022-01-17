import Properties from "prop-types";

import React, { Suspense, lazy as Import } from "react";

type Importable = React.LazyExoticComponent<typeof import("./../../components/page/content").default>;

/*** Code Importing Page Content + Data Fetching */
const Content: Importable = Import(() => import("./../../components/page/content"));

const Mobile = Import(() => import("./../../components/mobile-device"));
const Text = Import(() => import("./../../components/text"));

/**
 *  Page Exportable with Code-Import HTML Content
 *  and Asynchronous Data Fetching
 */

const Page = ( { name } ) => {
    return (
        <Suspense fallback={ null }>
            <Content name={ name }>
                <Mobile>
                    <Text input={ name } center={ true }/>
                </Mobile>
            </Content>
        </Suspense>
    );
};

Page.propTypes = {
    /*** Page Title */
    name: Properties.string
};

Page.defaultProps = {
    name: "Mobile-Preview"
};

export default Page;

export { Page };