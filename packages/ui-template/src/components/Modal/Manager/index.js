import ReactDOM, { createPortal } from "react-dom";

import React, { useState } from "react";

import { default as Button } from "./../../Button";

import { Modal, TextInput, Select, SelectItem } from "@carbon/react";

const Component = ({ Content, buttonText }) => {
    const State = ({ renderLauncher: LauncherContent, children: Content }) => {
        const [ open, setOpen ] = useState(false);
        return (
            <>
                { !Content || typeof document === "undefined"
                    ? null
                    : ReactDOM.createPortal(
                        <Content open={ open } setOpen={ setOpen }/>, document.body
                    ) }
                { LauncherContent && <LauncherContent open={ open } setOpen={ setOpen }/> }
            </>
        );
    };

    return (
        <State
            renderLauncher={ ({ setOpen }) => (
                <Button onClick={ () => setOpen(true) }>
                    {
                        buttonText
                    }
                </Button>
            ) }>
            { ({ open, setOpen }) => (
                <Modal
                    modalHeading="Add a custom domain"
                    modalLabel="Account resources"
                    primaryButtonText="Add"
                    secondaryButtonText="Cancel"
                    open={ open }
                    onRequestClose={ () => setOpen(false) }>
                    <p style={ { marginBottom: "1.0rem" } }>
                        Custom domains direct requests for your apps in this Cloud Foundry
                        organization to a URL that you own. A custom domain can be a shared
                        domain, a shared subdomain, or a shared domain and host.
                    </p>
                    <TextInput
                        data-modal-primary-focus
                        id="text-input-1"
                        labelText="Domain name"
                        placeholder="e.g. github.com"
                        style={ { marginBottom: "1rem" } }
                    />
                    <Select id="select-1" defaultValue="us-south" labelText="Region">
                        <SelectItem value="us-south" text="US South"/>
                        <SelectItem value="us-east" text="US East"/>
                    </Select>
                </Modal>
            ) }
        </State>
    );
};

Component.defaultProps = {
    buttonText: "Launch Modal"
};

export default Component;