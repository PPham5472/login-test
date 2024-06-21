import { useState } from "react";

export default () => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return {
        state: {
            isFocused,
            setIsFocused,
            showPassword,
            setShowPassword,
        },
    };
};
