const Awaitable = async (duration) => {
    return new Promise(async (resolve) => {
        // @ts-ignore
        await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](duration);
        resolve(true);
    });
};
export { Awaitable };
export default Awaitable;
