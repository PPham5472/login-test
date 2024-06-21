import React from "react";
import { useController } from "./hooks";

const Button = ({ children, ctr }) => {
    const {
        handlers: { clickHandler },
    } = useController(ctr);

    return (
        <button className="button" disabled={false} onClick={clickHandler}>
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
