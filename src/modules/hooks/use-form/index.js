import { createState, useValidate } from "./hooks";
import methods from "./methods";

export default ({ initialValues = {}, serializers = {}, validators = {} }) => {
    const formStore = Object.keys(initialValues).reduce(
        (prev, key) => ({
            ...prev,
            [key]: { ...createState(initialValues[key], serializers[key]) },
        }),
        {}
    );

    const { validate } = useValidate({ formStore, validators });

    const bindFormToMethods = Object.keys(methods).reduce(
        (prev, key) => ({ ...prev, [`_${key}`]: () => methods[key](formStore) }),
        {}
    );

    return { ...formStore, ...bindFormToMethods, _validate: validate };
};
