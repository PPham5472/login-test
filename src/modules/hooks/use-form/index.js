import { useState } from "react";

const createState = (val = null, serialize = null) => {
    const [value, setValue] = useState(val);

    const setState = (newStateVal) => {
        if (typeof newStateVal === "function" && serialize) {
            setValue((prev) => serialize(newStateVal(prev)));
        } else if (serialize) setValue(serialize(newStateVal));
        else setValue(newStateVal);
    };

    return { value, setValue: setState };
};

export default (defaultValues = {}, serializers = {}) => {
    const stateControllers = Object.keys(defaultValues).reduce(
        (prev, key) => ({
            ...prev,
            [key]: createState(defaultValues[key], serializers[key]),
        }),
        {}
    );

    const getForm = () =>
        Object.keys(stateControllers).reduce(
            (prev, key) => ({
                ...prev,
                [key]: stateControllers[key].value,
            }),
            {}
        );

    const values = Object.keys(stateControllers).map((key) => stateControllers[key].value);

    return { ...stateControllers, _getForm: getForm, _values: values };
};
