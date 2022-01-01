import React, {Suspense, lazy as Split} from "react";

type Content = typeof import("./content").default;
type Import = React.LazyExoticComponent<Content>;

/*** Code Splitting Page Content + Data Fetching */

const Content: Import = Split(() => import("./content"));


/**
 *  Page Exportable with Code-Split HTML Content
 *  and Asynchronous Data Fetching
 */

const Page = () => {
    return (
        <Suspense fallback={null}>
            <Content>
                Home
            </Content>
        </Suspense>
    )
};

export default Page;

export {Page};