import { useState } from "react";

export default (val = null, serialize = null) => {
    const [value, setValue] = useState(val);

    const setState = (newStateVal) => {
        if (typeof newStateVal === "function" && serialize) {
            setValue((prev) => serialize(newStateVal(prev)));
        } else if (serialize) setValue(serialize(newStateVal));
        else setValue(newStateVal);
    };

    return { value, setValue: setState };
};
