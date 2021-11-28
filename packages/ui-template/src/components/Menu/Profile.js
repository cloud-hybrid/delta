import { useEffect } from "react";

const Component = ({ State }) => {
    useEffect(() => {
        const Styles = async () => {
            await import("./SCSS/Profile.scss");
        };

        document.getElementById("io-profile").addEventListener("click", (event) => {
            console.debug(event.target);

            event.stopImmediatePropagation();
        });

        return Styles().finally(() => console.debug("[Debug]", "Imported Style(s)"));
    }, []);

    return (
        <div id={ "io-profile" } className={ "io-profile-popover" }>
            <div className={ "io-profile-popover-container" }>
                <h3>
                    Profile-Name Header
                </h3>
            </div>
        </div>
    );
};

export default Component;
