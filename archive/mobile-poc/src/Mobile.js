import "./index.scss";
import "./Mobile.scss";

import { useState } from "react";

import { Grid, Row, Column } from "@carbon/react";

import { default as Editor } from "./Preview-Editor";
import { default as Frame } from "./Frame";

import { Preview } from "./Dynamic-Rows-Table";

const Container = ({ children }) => {
    return (
        <section className={ "io-nexus-mobile-device-container" }>
            {
                children
            }
        </section>
    );
};

const Component = ({ children }) => {
    return (
        <div className="nexus-device iphone-x">
            <div className="notch">
                <div className="camera"/>
                <div className="speaker"/>
            </div>
            <div className="top-bar"/>
            <div className="sleep"/>
            <div className="bottom-bar"/>
            <div className="volume"/>
            <div className="overflow">
                <div className="shadow shadow--tr"/>
                <div className="shadow shadow--tl"/>
                <div className="shadow shadow--br"/>
                <div className="shadow shadow--bl"/>
            </div>
            <div className="inner-shadow"/>
            <div className="screen">
                <section className="iphone-x inner-screen-grid">
                    {
                        // (<Loading active={!state[0]} small={true}/>)
                    }
                    {/*  ...  */ }
                    {
                        children
                    }
                    {/*  ...  */ }
                </section>
            </div>
        </div>
    );
};

const Page = () => {
    const ready = useState(false);

    const Constants = {
        URL: process.env.REACT_APP_API_ENDPOINT + "/API/AWS/S3/Get-Bucket-Content?Bucket=nexus-client-storage&Object=index.html"
    };

    return (
        <Grid columns={ 2 }>
            <Row style={ { "justifyContent": "space-evenly" } }>
                <Column>
                    <Editor state={ ready }/>
                </Column>
                <Column>
                    <Container>
                        <Component state={ ready }>
                            <Frame previewID={ Preview } url={ Constants.URL } state={ ready }/>
                        </Component>
                    </Container>
                </Column>
            </Row>
        </Grid>
    );
};

export default Page;