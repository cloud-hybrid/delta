const Logger = ($) => {
    switch ($.name) {
        case "FCP":
            console.debug("First-Contentful-Paint", { ...$, ...{ description: "First-Contentful-Paint" } });
            return { ...$, ...{ description: "First-Contentful-Paint" } };
        case "CLS":
            console.debug("Cumulative-Layout-Shift", { ...$, ...{ description: "Cumulative-Layout-Shift" } });
            return { ...$, ...{ description: "Cumulative-Layout-Shift" } };
        case "LCP":
            console.debug("Largest-Contentful-Paint", { ...$, ...{ description: "Largest-Contentful-Paint" } });
            return { ...$, ...{ description: "Largest-Contentful-Paint" } };
        case "TTFB":
            console.debug("Time-to-First-Byte", { ...$, ...{ description: "Time-to-First-Byte" } });
            return { ...$, ...{ description: "Time-to-First-Byte" } };
        case "FID":
            console.debug("First-Input-Delay", { ...$, ...{ description: "First-Input-Delay" } });
            return { ...$, ...{ description: "First-Input-Delay" } };
    }
};
const Vitals = () => {
    try {
        return import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            return {
                "First-Contentful-Paint": getFCP(Logger, true),
                "Cumulative-Layout-Shift": getCLS(Logger, true),
                "Largest-Contentful-Paint": getLCP(Logger, true),
                "First-Input-Delay": getFID(Logger, true),
                "Time-to-First-Byte": getTTFB(Logger)
            };
        });
    }
    catch (error) {
        console.debug("[Debug] Error" + ":", error);
        return null;
    }
};
export { Vitals };
export default Vitals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml0YWxzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJ1dGlsaXRpZXMvdml0YWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7SUFDekIsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQ1osS0FBSyxLQUFLO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBQyxXQUFXLEVBQUUsd0JBQXdCLEVBQUMsRUFBQyxDQUFDLENBQUM7WUFDNUYsT0FBTyxFQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBQyxXQUFXLEVBQUUsd0JBQXdCLEVBQUMsRUFBQyxDQUFDO1FBQzlELEtBQUssS0FBSztZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsRUFBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUMsV0FBVyxFQUFFLHlCQUF5QixFQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQzlGLE9BQU8sRUFBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUMsV0FBVyxFQUFFLHlCQUF5QixFQUFDLEVBQUMsQ0FBQztRQUMvRCxLQUFLLEtBQUs7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFDLFdBQVcsRUFBRSwwQkFBMEIsRUFBQyxFQUFDLENBQUMsQ0FBQztZQUNoRyxPQUFPLEVBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFDLFdBQVcsRUFBRSwwQkFBMEIsRUFBQyxFQUFDLENBQUM7UUFDaEUsS0FBSyxNQUFNO1lBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBQyxXQUFXLEVBQUUsb0JBQW9CLEVBQUMsRUFBQyxDQUFDLENBQUM7WUFDcEYsT0FBTyxFQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBQyxXQUFXLEVBQUUsb0JBQW9CLEVBQUMsRUFBQyxDQUFDO1FBQzFELEtBQUssS0FBSztZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2xGLE9BQU8sRUFBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLEVBQUMsQ0FBQztLQUM1RDtBQUNMLENBQUMsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNoQixJQUFJO1FBQ0EsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUM1QixDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUU7WUFDMUMsT0FBTztnQkFDSCx3QkFBd0IsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztnQkFDOUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7Z0JBQy9DLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO2dCQUNoRCxtQkFBbUIsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztnQkFDekMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUN4QyxDQUFDO1FBQ04sQ0FBQyxDQUNKLENBQUM7S0FDTDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDLENBQUM7QUFFRixPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7QUFFaEIsZUFBZSxNQUFNLENBQUMifQ==