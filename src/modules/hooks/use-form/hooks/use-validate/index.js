import { useState } from "react";

export default ({ formStore, validators }) => {
    Object.keys(formStore).forEach((key) => {
        const [invalid, setInvalid] = useState(false);

        formStore[key].invalid = invalid;
        formStore[key].setInvalid = setInvalid;
    });

    const validate = () => {
        const invalidCount = Object.keys(validators).reduce((prev, key) => {
            const validatorFn = validators[key];
            const invalidValue = validatorFn(formStore[key].value);

            if (invalidValue) {
                formStore[key].setInvalid(invalidValue);
                return prev + 1;
            }

            return prev;
        }, 0);

        return { invalidCount };
    };

    return {
        validate,
    };
};
