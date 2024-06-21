import { useState } from "react";

export default ({ formStore }) => {
    const [validators, setValidators] = useState({});

    const validate = () => {
        Object.keys(validators).reduce((prev, key) => {
            const validatorFn = validators[key];
            const isValid = validatorFn(formStore[key].value);

            return {
                ...prev,
                [key]: isValid,
            };
        }, {});
    };

    return {
        setValidators,
        validate,
    };
};
