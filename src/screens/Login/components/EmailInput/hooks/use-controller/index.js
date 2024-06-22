import { useState } from "react";

export default ({ form }) => {
    const [value, setValue] = useState(form.value);

    const inputHandler = (e) => {
        setValue(e.target.value);
        form.setValue(e.target.value);
        // form.setInvalid(false);
    };

    return {
        handlers: { inputHandler },
        state: {
            value,
            setValue,
        },
    };
};
