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
        <div className={cx("email-input")}>
            <label className={cx("input-label")}>
                {icon && <img className={cx("mail")} src={icon} />}
                {label}
            </label>
            <input
                className={cx(["input", form.invalid && "---invalid---"])}
                onChange={inputHandler}
                placeholder={placeholder}
                value={value}
            />
            {form.invalid && (
                <p className={cx("invalid-text")}>Use a valid email format of name@example.com</p>
            )}
        </div>
    );
};

EmailInput.defaultProps = {
    form: { value: "", setValue: () => {} },
    icon: null,
    label: "",
    placeholder: "",
};

export default EmailInput;
