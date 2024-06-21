import React from "react";
import { mergeStyles } from "#modules/utils";
import { useController } from "./hooks";
import stylesheet from "./styles.module.css";

const Button = ({ children, ctr }) => {
    const { cx } = mergeStyles(stylesheet);
    const {
        handlers: { clickHandler },
    } = useController(ctr);

    return (
        <button className={cx("button")} disabled={false} onClick={clickHandler}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: null,
    ctr: {
        handleClick: () => {},
    },
};

export default Button;
