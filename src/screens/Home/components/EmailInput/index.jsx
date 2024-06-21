import React from "react";
import { useController } from "./hooks";

const EmailInput = ({ form, icon, iconClassName, label, placeholder }) => {
    const {
        handlers: { inputHandler },
        state: { value },
    } = useController({ form });

    return (
        <>
            <label className="input-label">
                {icon && <img className={iconClassName} src={icon} />}
                {label}
            </label>
            <input className="input" onChange={inputHandler} placeholder={placeholder} value={value} />
        </>
    );
};

EmailInput.defaultProps = {
    form: { value: "", setValue: () => {} },
    icon: null,
    iconClassName: "",
    label: "",
    placeholder: "",
};

export default EmailInput;
