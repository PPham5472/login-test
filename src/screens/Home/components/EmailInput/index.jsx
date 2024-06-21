import React from "react";
import { mergeStyles } from "#modules/utils";
import { useController } from "./hooks";
import stylesheet from "./styles.module.css";

const EmailInput = ({ form, icon, label, placeholder }) => {
    const { cx } = mergeStyles(stylesheet);
    const {
        handlers: { inputHandler },
        state: { value },
    } = useController({ form });

    return (
        <>
            <label className={cx("input-label")}>
                {icon && <img className={cx("mail")} src={icon} />}
                {label}
            </label>
            <input className={cx("input")} onChange={inputHandler} placeholder={placeholder} value={value} />
        </>
    );
};

EmailInput.defaultProps = {
    form: { value: "", setValue: () => {} },
    icon: null,
    label: "",
    placeholder: "",
};

export default EmailInput;
