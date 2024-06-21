import React from "react";
import { mergeStyles } from "#modules/utils";
import { useController, useInput } from "./hooks";
import stylesheet from "./styles.module.css";

const PasswordInput = ({ form, icon, label, placeholder }) => {
    const { cx } = mergeStyles(stylesheet);
    const {
        handlers: { inputHandler },
        state: { value },
    } = useController({ form });
    const {
        state: { isFocused, setIsFocused, showPassword, setShowPassword },
    } = useInput();

    return (
        <>
            <label className={cx("input-label")}>
                {icon && <img className={cx("padlock")} src={icon} />}
                {label}
            </label>
            <div className={cx(["input-container", isFocused && "input-container--focused"])}>
                <input
                    className={cx(["input", isFocused && "input-focused"])}
                    maxLength={255}
                    onBlur={() => setIsFocused(false)}
                    onChange={inputHandler}
                    onFocus={() => setIsFocused(true)}
                    placeholder={placeholder}
                    type={showPassword ? "text" : "password"}
                    value={value}
                />
                <button className={cx("show-btn")} onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
        </>
    );
};

PasswordInput.defaultProps = {
    form: { value: "", setValue: () => {} },
    icon: null,
    label: "",
    placeholder: "",
};

export default PasswordInput;
