import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { mergeStyles } from "#modules/utils";
import stylesheet from "./styles.module.css";

const Toast = ({ setDisplayToast }) => {
    const { cx } = mergeStyles(stylesheet);

    useEffect(() => {
        setTimeout(() => setDisplayToast(false), 5000);
    }, []);

    return createPortal(
        <div className={cx("toast")}>
            <div className={cx("toast-banner")} />
            <div className={cx("toast-content")}>
                <h3 className={cx("toast-header")}>{"Uh oh, something went wrong!"}</h3>
                <p className={cx("toast-description")}>An error occurred. Let's try that again.</p>
            </div>
        </div>,
        document.getElementById("root")
    );
};

Toast.defaultProps = {};

export default Toast;
