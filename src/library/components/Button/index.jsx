import React from "react";
import { mergeStyles } from "#modules/utils";
import { useController } from "./hooks";
import stylesheet from "./styles.module.css";

const Button = ({ children, className, ctr, ...props }) => {
    const { cx } = mergeStyles(stylesheet);
    const {
        handlers: { clickHandler },
    } = useController(ctr);

    return (
        <button className={cx("button", className)} onClick={clickHandler} {...props}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: null,
    className: "",
    ctr: {
        handleClick: () => {},
    },
};

export default Button;
