import { createState, useValidate } from "./hooks";
import methods from "./methods";

export default (defaultValues = {}, serializers = {}) => {
    const formStore = Object.keys(defaultValues).reduce(
        (prev, key) => ({
            ...prev,
            [key]: createState(defaultValues[key], serializers[key]),
        }),
        {}
    );

    const bindFormToMethods = Object.keys(methods).reduce(
        (prev, key) => ({ ...prev, [`_${key}`]: () => methods[key](formStore) }),
        {}
    );

    const { setValidators, validate } = useValidate({ formStore });

    return { ...formStore, ...bindFormToMethods, _setValidators: setValidators, _validate: validate };
};
