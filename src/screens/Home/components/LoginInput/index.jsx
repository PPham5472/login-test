import React from "react";

const TextInput = ({ form, icon, iconClassName, label, placeholder, type }) => {
    return (
        <>
            <label className="input-label">
                {icon && <img className={iconClassName} src={icon} />}
                {label}
            </label>
            <input className="input" placeholder={placeholder} type={type} />
        </>
    );
};

TextInput.defaultProps = {
    form: { value: "", setValue: () => {} },
    icon: null,
    iconClassName: "",
    label: "",
    placeholder: "",
    type: "",
};

export default TextInput;
