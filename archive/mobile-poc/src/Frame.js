import { useEffect } from "react";

const Content = ({ ID, state }) => {
    return (
        <iframe id={ ID } data-state={ String(state[0]) }/>
    );
};

/*****
 *
 * @param previewID {string}
 * @param url {string}
 * @param state
 * @returns {JSX.Element}
 * @constructor
 *
 */

const Component = ({ previewID, url, state }) => {
    console.debug("Page Load Event", "I-Frame Component");

    useEffect(() => {
        /// require("axios").get(url).then((response) => {
        let content;

        const iframe = document.getElementById(previewID);

        console.debug(iframe);

        content = iframe.contentWindow || (iframe.contentDocument.document || iframe.contentDocument);

        require("axios").get(url).then((data) => {
            content.document.open();
            content.document.write(data.data);
            content.document.close();

            console.debug(content);
        });

        state[1](true);
    }, []);
    // }, []);

    return (
        <Content ID={ previewID } state={ state }/>
    );
};

const $Component = ({ state }) => {
    const content = `\
    <!DOCTYPE html>
    <html class="no-js" lang="EN">
        <head>
            <!--
                *-* DOM + Rule(s) *-*
            --->
    
            <meta charset="UTF-8"/>
    
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="robots" content="noodp">
    
            <meta name="referrer" content="origin">
    
            <title>Nexus - URL-List</title>
    
            <meta name="description" content="...">
    
            <!-- <link rel="canonical" href="%PUBLIC_URL%" /> -->
    
            <meta name="theme-color" content="#000000"/>
            <meta name="supported-color-schemes" content="light dark"/>
    
            <!-- <link rel="icon" type="image/x-icon" href="favicon.ico"> -->
            <!-- <link rel="shortcut icon" href="Favicon/Icon-192x192.png" /> -->
            <!-- <link rel="manifest" href="manifest.json"> -->
            <!-- <script type="module" src="Head.js" async></script> -->
    
            <meta name="msapplication-TileColor" content="#da532c">
    
            <!--
                *-* Application + Context *-*
            -->
    
            <!-- <meta name="application-name" content="Nexus-Web-Application"/> -->
            <!-- <meta name="generator" content="Nexus"/> -->
            <!-- <meta name="description" content="[Alpha] Cloud Services & Technology - (Page Under Construction)"/> -->
            <!-- <meta name="keywords" content="N/A"/> -->
            <!-- <meta name="referer" content="origin"/> -->
            <!-- <meta name="company" content="Cloud-Technology LLC."/> -->
            <!-- <meta name="author" content="Jacob B. Sanders"/> -->
    
            <!--
                *-* Twitter Card *-*
            --->
    
            <!-- <meta name="twitter:card" content="summary"/> -->
            <!-- <meta name="twitter:image:src" content="%PUBLIC_URL%/Carbon.png"/> -->
            <!-- <meta name="twitter:site" content="[Alpha] (Twitter-Metadata) - Site"/> -->
            <!-- <meta name="twitter:title" content="[Alpha] (Twitter-Metadata) - Title"/> -->
            <!-- <meta name="twitter:description" content="[Alpha] (Twitter-Metadata) - Description"/> -->
            <!-- <meta name="twitter:creator" content="@Segmentational"/> -->
            <!-- <meta name="twitter:author" content="@Segmentational"/> -->
    
            <!--
                *-* Open Graph (Embed-Data) *-*
            -->
    
            <!-- <meta property="og:site_name" content="Nexus-UI"/> -->
            <!-- <meta property="og:title" content="Nexus-Web-Application"/> -->
            <!-- <meta property="og:type" content="website"/> -->
            <!-- <meta property="og:url" content="%PUBLIC_URL%/Carbon.png"/> -->
            <!-- <meta property="og:image" content="%PUBLIC_URL%/Carbon.png"/> -->
            <!-- <meta property="og:description" content="[Alpha] (OG-Metadata) - Description"/> -->
    
            <!--
                *-* Theme Information *-*
            -->
    
            <!--
                *-* Tracking *-*
    
                Setting := Do Not Track (DNT)
            -->
    
            <meta name="twitter:dnt" content="on">
    
            <!--
                *-* Language Inclusion *-*
            -->
    
            <link rel="alternate" hreflang="x-default" href="https://www.ibm.com/us-en">
            <link rel="alternate" hreflang="en-us" href="https://www.ibm.com/us-en">
    
            <!--
                *-* Font-Face + Styling *-*
            -->
    
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                rel="stylesheet"
            >
    
            <style>
                * {
                    transition: all 0.6s;
                }
    
                html {
                    height: 100%;
                }
    
                body {
                    font-family: "IBM Plex Sans", ui-sans-serif, sans-serif, sys;
                    color: #888;
                    margin: 0;
                }
    
                main {
                    display: table;
                    width: 100%;
                    height: 100vh;
                    text-align: center;
                }
    
                .index-page {
                    display: table-cell;
                    vertical-align: middle;
                }
    
                .index-page h1 {
                    font-size: 50px;
                    display: inline-block;
                    padding-right: 12px;
                    animation: type .5s alternate infinite;
                }
    
                @keyframes type {
                    from {
                        box-shadow: inset -3px 0px 0px #888;
                    }
                    to {
                        box-shadow: inset -3px 0px 0px transparent;
                    }
                }
            </style>
        </head>
        <body>
            <main>
                <div class="index-page">
                    <h1>URL-List</h1>
                    <h2>Nexus</h2>
                </div>
            </main>
            <div id="URL-List"></div>
        </body>
    </html>
    `;

    useEffect(() => {
        //require("axios").get(url).then((response) => {
        //    let content;

        const I = document.createElement("iframe");

        const Document = I.contentWindow || (I.contentDocument.document || I.contentDocument);

        Document.document.open();
        Document.document.write(Content);
        Document.document.close();

        state[1](true);
    }, []);

    return (
        <Content ID={ previewID } state={ state }/>
    );
};

export default Component;