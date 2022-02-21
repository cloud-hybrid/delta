/**
 * @file Shell.
 * @copyright IBM Security 2019 - 2021
 */

import { ArrowLeft16 } from "@carbon/icons-react";

import classnames from "classnames";

import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { getComponentNamespace } from "../../globals/namespace";

import Header from "../Header";
import Icon from "../Icon";
import Link from "../Link";
import Toolbar from "../Toolbar";
import { SkipToContent } from "@carbon/react";

export const namespace = getComponentNamespace("shell");

const { defaultProps: headerDefaultProps, propTypes: headerPropTypes } = Header;

const Shell = ({
                   header,
                   profile,
                   renderAddons,
                   returnToBanner,
                   skipToContent,
                   toolbar,
                   ... properties
               }) => {
    const {
        accounts,
        clearAllNotifications,
        totalNotifications,
        links,
        notifications,
        onAccountClick,
        onNotificationClear,
        ... headerProps
    } = header;

    const activeClass = `${ namespace }-active`;
    const returnClass = `${ activeClass }-return`;

    const headerNamespace = "-shell-header";

    return (
        <Fragment>
            { skipToContent && (
                <div className={ `${ namespace }-skip-to-content` }>
                    <SkipToContent
                        id={ `${ namespace }-skip-to-content-link` }
                        className={ `${ namespace }-skip-to-content-link` }
                        href={ skipToContent.href }
                    >
                        { skipToContent.label }
                    </SkipToContent>
                </div>
            ) }
            { returnToBanner && (
                <div className={ `${ namespace }-banner-container` }>
                    <Link
                        id="returnToBanner"
                        className={ `${ namespace }-banner` }
                        href={ returnToBanner.href }
                        style={ {
                            backgroundImage: "/Images/Entitlements.png"
                        } }
                    >
                        <Icon
                            className={ `${ namespace }-banner-icon` }
                            renderIcon={ ArrowLeft16 }
                        />
                        <span className={ `${ namespace }-banner-text` }>
              { returnToBanner.view
                  ? `Return to ${ returnToBanner.application } / ${ returnToBanner.view }`
                  : `Return to ${ returnToBanner.application }` }
            </span>
                    </Link>
                </div>
            ) }
            <div
                className={ classnames(namespace, {
                    [activeClass]: profile,
                    [returnClass]: returnToBanner
                }) }
            >
                { profile && (
                    <Toolbar
                        className={ classnames({
                            [`${ returnClass }-toolbar`]: returnToBanner
                        }) }
                        renderAddons={ renderAddons }
                        { ... toolbar }
                    />
                ) }
                <Header
                    accounts={ accounts }
                    className={ classnames({
                        [`${ activeClass }${ headerNamespace }`]: profile,
                        [`${ returnClass }${ headerNamespace }`]: returnToBanner
                    }) }
                    clearAllNotifications={ clearAllNotifications }
                    totalNotifications={ totalNotifications }
                    labels={ header.labels }
                    links={ links }
                    notifications={ notifications }
                    onAccountClick={ onAccountClick }
                    onNotificationClear={ onNotificationClear }
                    profile={ profile }
                    { ... headerProps }
                />
            </div>
        </Fragment>
    );
};

Shell.defaultProps = {
    header: headerDefaultProps,
    profile: headerDefaultProps.profile,
    renderAddons: Toolbar.defaultProps.renderAddons,
    returnToBanner: null,
    skipToContent: null,
    toolbar: {}
};

Shell.propTypes = {
    /** @type {object<object.Object>} An object list of header properties. */
    header: PropTypes.shape(headerPropTypes),

    /** @type {object<object.Object>} An object list of profile properties. */
    profile: headerPropTypes.profile,

    /** @type {Array<{id: string, tooltip: string, render: Function: React.Element}>} An object list to render custom addon icons. */
    renderAddons: Toolbar.propTypes.renderAddons,

    /** @type {object<object.Object>} An object list of banner properties. */
    returnToBanner: PropTypes.shape({
        application: PropTypes.string.isRequired,
        view: PropTypes.string,
        href: PropTypes.string.isRequired
    }),

    /** @type {object.<string, string>} Object of 'skip-to-content' link information. */
    skipToContent: PropTypes.shape({
        /** @type {string} Label text for 'skip-to-content'. */
        label: PropTypes.string,

        /** @type {string} Location to skip to. */
        href: PropTypes.string
    }),

    /** @type {object<object.Object>} An object list of toolbar properties. */
    toolbar: PropTypes.shape(Toolbar.propTypes)
};

export default Shell;