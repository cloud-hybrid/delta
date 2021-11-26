import React, { useState } from "react";

import { Button } from "@carbon/react";

import { Code, Dashboard, DataBackup, Debug, Development, FitToWidth, Search, Switcher as Switch, UserData } from "@carbon/icons-react/next";

import "./Page.scss";

import {
    SideNav,
    SideNavDetails,
    SideNavFooter,
    SideNavHeader,
    SideNavDivider,
    SideNavIcon,
    SideNavItem,
    SideNavItems,
    SideNavLink,
    SideNavLinkText,
    SideNavMenu,
    SideNavMenuItem,
    SideNavSwitcher
} from "./../../components/Navigation";

const Icons = {
    Home: () => (
        <DataBackup/>
    ),
    Debug: () => (
        <Debug/>
    ),
    Dashboard: () => (
        <Dashboard/>
    ),
    Code: () => (
        <Code/>
    ),
    Development: () => (
        <Development/>
    ),
    Switcher: {
        Primary: () => (
            <Switcher/>
        ),
        Auxiliary: () => (
            <Switch/>
        )
    },
    Search: {
        Primary: () => (
            <Search/>
        ),
        Auxiliary: () => (
            <Search/>
        )
    },
    Login: {
        Primary: () => (
            <UserData/>
        ),
        Auxiliary: () => (
            <UserData/>
        )
    }
};

import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigator = () => {
    const navigation = useNavigate();

    const [ expanded, setExpanded ] = useState(false);

    const Active = (_ = "") => {
        const $ = "/" + _;
        const Path = (
            $ === location.pathname
        );
        const Hash = (
            $ === "#" + Path
        );

        return (
            Path || Hash
        );
    };

    return (
        //        <SideNav
        //            aria-label="Side Navigation"
        //            expanded={ expanded }
        //            isPersistent={ false }
        //            className={ Panel.side }
        //            onOverlayClick={ (event) => {
        //                setExpanded(true);
        //            } }
        //        >
        <SideNav
            isRail={ true }
            //            isPersistent={ true }
            expanded={ false }
            //            defaultExpanded={ true }
            //            onOverlayClick={ (event) => {
            //                setExpanded(true);
            //            } }
            aria-label="Side navigation"
            addMouseListeners={ false }
            addFocusListeners={ false }
        >
            <SideNavItems>
                <SideNavLink
                    renderIcon={ Icons.Development }
                    isActive={ Active("gitlab") }
                    onClick={
                        () => {
                            navigation("/gitlab");
                            setExpanded(true);
                        }
                    }
                >
                    GitLab
                </SideNavLink>
                <SideNavLink
                    renderIcon={ Icons.Development }
                    isActive={ Active("github") }
                    onClick={
                        () => {
                            navigation("/github");
                            setExpanded(true);
                        }
                    }
                >
                    GitHub
                </SideNavLink>
                <SideNavLink
                    renderIcon={ Icons.Development }
                    isActive={ Active("pipelines") }
                    onClick={
                        () => {
                            navigation("/pipelines");
                            setExpanded(true);
                        }
                    }
                >
                    Pipelines
                </SideNavLink>
                <SideNavMenu
                    renderIcon={ Icons.Debug }
                    title="Development"
                >
                    <SideNavMenuItem
                        href="/servers" resource={ "servers" }
                        onClick={
                            () => {
                                setExpanded(true);
                            }
                        }
                        async={ true }
                    >
                        Item-1
                    </SideNavMenuItem>
                    <SideNavMenuItem
                        href="/servers" resource={ "servers" }
                        onClick={
                            () => {
                                setExpanded(true);
                            }
                        }
                        async={ true }
                    >
                        Item-2
                    </SideNavMenuItem>
                    <SideNavMenuItem
                        href="/servers" resource={ "servers" }
                        onClick={
                            () => {
                                setExpanded(true);
                            }
                        }
                        async={ true }
                    >
                        Item-3
                    </SideNavMenuItem>
                </SideNavMenu>
                {/*<SideNavFooter expanded={ false } onToggle={ () => setExpanded(false) }/>*/ }
            </SideNavItems>
        </SideNav>
    );
};

export const Panel = ({ State }) => {
    const handleClick = () => State[1]((State[0] === "rail") ? "expansion" : "rail");

    const [ expand, setExpand ] = React.useState(false);

    return (
        <>
            <Navigator/>
        </>
    );
    //    <div className={ "io-dashboard-panel-container" }>
    //        {/*<nav className={ "io-dashboard-panel-navigation" }>*/ }
    //        {/*    <ul>*/ }
    //        {/*        <li>*/ }
    //        {/*            Test-1*/ }
    //        {/*        </li>*/ }
    //        {/*    </ul>*/ }
    //        {/*</nav>*/ }
    //
    //        <Button
    //            hasIconOnly={ true }
    //            size={ "small" }
    //            renderIcon={
    //                () => (
    //                    <FitToWidth
    //                        height={ "18px" }
    //                        width={ "18px" }
    //                    />
    //                )
    //            }
    //            kind={ "tertiary" }
    //            onClick={ () => handleClick() }
    //        />
    //    </div>
    //)

};