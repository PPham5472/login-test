import { useState } from "react";

export default () => {
    const [value, setValue] = useState("");

    const inputHandler = (e) => {
        setValue(e.current.target);
    };

    return {
        handlers: inputHandler,
        state: {
            value,
            setValue,
        },
    };
};
