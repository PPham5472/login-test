export default (ctr) => {
    const clickHandler = () => {
        ctr.onSubmit();
    };

    return {
        handlers: { clickHandler },
    };
};
