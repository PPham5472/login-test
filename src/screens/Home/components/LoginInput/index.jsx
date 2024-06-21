import React from "react";
import { useController } from "./hooks";

const LoginInput = ({ form, icon, iconClassName, label, placeholder, type }) => {
    const {
        handlers: { inputHandler },
        state: { value },
    } = useController();

    return (
        <>
            <label className="input-label">
                {icon && <img className={iconClassName} src={icon} />}
                {label}
            </label>
            <input className="input" onChange={inputHandler} placeholder={placeholder} type={type} value={value} />
        </>
    );
};

LoginInput.defaultProps = {
    form: { value: "", setValue: () => {} },
    icon: null,
    iconClassName: "",
    label: "",
    placeholder: "",
    type: "",
};

export default LoginInput;
