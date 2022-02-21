import { default as Shell } from "./components/Shell";

import { Tag } from "@carbon/ibm-security";

import React, { useEffect, useState, lazy as Import, Suspense } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { Authorizer, JWT, Validate } from "./components/Authenticate";

import "./Application.css";

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
        <Shell className={ "io-shell-header-container" }
               header={ {
                   labels: {
                       brand: {
                           company: "IBM",
                           domain: "Security",
                           product: "Application"
                       },
                       notifications: {
                           button: "Toggle notifications",
                           clear: "Clear",
                           clear_all: "Clear all notifications",
                           link: "View all",
                           success: "You're all caught up!",
                           title: "Notifications",
                           today: "Today",
                           via: "via"
                       },
                       profile: {
                           account: "Account",
                           button: "Toggle profile",
                           edit_profile: "Edit profile",
                           link: "Profile & account",
                           registration: "Create an account",
                           sign_in: "Sign in",
                           sign_out: "Sign out"
                       }
                   },
                   links: {
                       edit_profile: "#",
                       notifications_preferences: "#",
                       notifications_view_all: "#",
                       product: "#",
                       profile: "#",
                       registration: "#",
                       sign_in: "#",
                       sign_out: "#"
                   },
                   totalNotifications: 307
               } }
               profile={ {
                   description: <span>Example description node with extra information and{ " " }<a href="#example">example link.</a></span>,
                   image_url: null,
                   name: {
                       first_name: "Sample",
                       surname: "User"
                   }
               } }
               renderAddons={ [] }
               returnToBanner={ null }
               skipToContent={ null }
               toolbar={ {
                   labels: {
                       mainNavigation: {
                           ariaLabel: "Main navigation"
                       },
                       menu: {
                           button: "Toggle menu",
                           tooltip: "Menu"
                       },
                       settings: {
                           button: "Toggle settings",
                           tooltip: "Settings"
                       },
                       support: {
                           button: "Toggle support",
                           tooltip: "Support"
                       }
                   },
                   menu: [
                       {
                           id: "#5",
                           navigation: [
                               {
                                   children: [
                                       {
                                           children: undefined,
                                           href: "ibm-security.carbondesignsystem.com#24",
                                           id: "27",
                                           title: "Applications"
                                       },
                                       {
                                           children: undefined,
                                           href: "ibm-security.carbondesignsystem.com#29",
                                           id: "2",
                                           title: "Plugins"
                                       },
                                       {
                                           children: undefined,
                                           href: "ibm-security.carbondesignsystem.com#22",
                                           id: "3",
                                           title: <div>Applications<Tag>Beta</Tag></div>
                                       }
                                   ],
                                   href: "ibm-security.carbondesignsystem.com#15",
                                   icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                                   id: "19",
                                   title: "Section 1"
                               },
                               {
                                   children: undefined,
                                   href: "ibm-security.carbondesignsystem.com#21",
                                   icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                                   id: "3",
                                   onClick: function noRefCheck() {},
                                   title: "Section 2"
                               },
                               {
                                   children: undefined,
                                   href: "ibm-security.carbondesignsystem.com#2",
                                   icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                                   id: "1",
                                   title: "Section 3"
                               }
                           ],
                           title: "My applications"
                       },
                       {
                           id: "#16",
                           navigation: [
                               {
                                   children: undefined,
                                   href: "ibm-security.carbondesignsystem.com#0",
                                   id: "24",
                                   title: "Section 4"
                               },
                               {
                                   children: undefined,
                                   href: "ibm-security.carbondesignsystem.com#25",
                                   icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
                                   id: "28",
                                   title: "Section 5"
                               },
                               {
                                   children: undefined,
                                   href: "ibm-security.carbondesignsystem.com#27",
                                   id: "13",
                                   title: "Section 6"
                               }
                           ],
                           title: ""
                       }
                   ],
                   settings: [
                       {
                           id: "#13",
                           navigation: [
                               {
                                   href: "ibm-security.carbondesignsystem.com#12",
                                   id: "5",
                                   title: "Account"
                               },
                               {
                                   href: "ibm-security.carbondesignsystem.com#27",
                                   id: "25",
                                   title: "Permissions"
                               },
                               {
                                   href: "ibm-security.carbondesignsystem.com#18",
                                   id: "16",
                                   title: "Teams"
                               }
                           ],
                           title: "General settings"
                       },
                       {
                           id: "#6",
                           navigation: [
                               {
                                   href: "ibm-security.carbondesignsystem.com#22",
                                   id: "10",
                                   title: "Application 1"
                               }
                           ],
                           title: "Application settings"
                       },
                       {
                           id: "#2",
                           navigation: [
                               {
                                   href: "https://www.ibm.com",
                                   id: "4",
                                   title: "Privacy"
                               },
                               {
                                   href: "ibm-security.carbondesignsystem.com#3",
                                   id: "5",
                                   title: "Terms"
                               }
                           ],
                           title: "Legal"
                       }
                   ],
                   support: [
                       {
                           id: "#16",
                           navigation: [
                               {
                                   href: "ibm-security.carbondesignsystem.com#4",
                                   id: "7",
                                   title: "Documentation"
                               },
                               {
                                   content: "\n<main>\n  <article>\n    <h1>Example info</h1>\n    <p>You can display information in the panel with HTML.</p>\n    <p>HTML tags you can use:</p>\n    <ul>\n      <li>\n        Ordered and unordered lists\n      </li>\n      <li>\n        Headings\n      </li>\n      <li>\n        Paragraphs\n      </li>\n      <li>\n        Anchors\n      </li>\n    </ul>\n  </article>\n</main>\n",
                                   href: "ibm-security.carbondesignsystem.com#23",
                                   id: "18",
                                   title: "Learn about..."
                               }
                           ],
                           title: "Support"
                       }
                   ]
               } }
        />
        //        <React.StrictMode>
        //            <Menu Authorizer={ Authorization }/>
        //            <Grid>
        //                <Column lg={ 16 } md={ 8 } sm={ 4 }>
        //                    <Routes basename={ "/" }>
        //                        <Route
        //                            element={
        //                                <Spinner timeout={ 1250 } description={ "Establishing Secure Context ..." }>
        //                                    <Home/>
        //                                </Spinner>
        //                            } path={ "/" }
        //                        />
        //                    </Routes>
        //                </Column>
        //            </Grid>
        //            {/* <BTT/> // @Task: Fix Issue(s) with Page Bottom-Margin(s) & Z-Index(es) */ }
        //        </React.StrictMode>
    );
};

export default Application;
