interface Logger {
    name: string;
}

const Logger = ($: Logger) => {
    switch ($.name) {
        case "FCP":
            console.debug("First-Contentful-Paint", {...$, ...{description: "First-Contentful-Paint"}});
            return {...$, ...{description: "First-Contentful-Paint"}};
        case "CLS":
            console.debug("Cumulative-Layout-Shift", {...$, ...{description: "Cumulative-Layout-Shift"}});
            return {...$, ...{description: "Cumulative-Layout-Shift"}};
        case "LCP":
            console.debug("Largest-Contentful-Paint", {...$, ...{description: "Largest-Contentful-Paint"}});
            return {...$, ...{description: "Largest-Contentful-Paint"}};
        case "TTFB":
            console.debug("Time-to-First-Byte", {...$, ...{description: "Time-to-First-Byte"}});
            return {...$, ...{description: "Time-to-First-Byte"}};
        case "FID":
            console.debug("First-Input-Delay", {...$, ...{description: "First-Input-Delay"}});
            return {...$, ...{description: "First-Input-Delay"}};
    }
};

const Vitals = () => {
    try {
        return import("web-vitals").then(
            ({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
                return {
                    "First-Contentful-Paint": getFCP(Logger, true),
                    "Cumulative-Layout-Shift": getCLS(Logger, true),
                    "Largest-Contentful-Paint": getLCP(Logger, true),
                    "First-Input-Delay": getFID(Logger, true),
                    "Time-to-First-Byte": getTTFB(Logger)
                };
            }
        );
    } catch (error) {
        console.debug("[Debug] Error" + ":", error);
        return null;
    }
};

export {Vitals};

export default Vitals;
