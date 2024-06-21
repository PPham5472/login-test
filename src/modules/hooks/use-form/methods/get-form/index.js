export default (formStore) =>
    Object.keys(formStore).reduce(
        (prev, key) => ({
            ...prev,
            [key]: formStore[key].value,
        }),
        {}
    );
