import React, { useEffect, useState } from "react";
import { Button, Toast } from "#library/components";
import { useForm } from "#modules/hooks";
import { mergeStyles } from "#modules/utils";
import IlluImg from "./assets/Illu.png";
import LockImg from "./assets/Lock.png";
import LogoImg from "./assets/Logo.png";
import MailImg from "./assets/Mail.png";
import { EmailInput, PasswordInput } from "./components";
import { initialValues, validators } from "./configs/form";
import { useController } from "./hooks";
import stylesheet from "./styles.module.css";

const Login = () => {
    const { cx } = mergeStyles(stylesheet);
    const formStore = useForm({ initialValues, validators });
    const {
        handlers: { onSubmit },
        state: { isButtonDisabled, displayToast, setDisplayToast },
    } = useController({ formStore });

    //Intentional Bugs
    const [disableButton, setDisableButton] = useState(true);
    useEffect(() => {
        if (!isButtonDisabled) setDisableButton(false);
    }, [isButtonDisabled]);
    const isChrome = !!window.chrome;

    return (
        <div className={cx("App")}>
            {displayToast && <Toast displayToast={displayToast} setDisplayToast={setDisplayToast} />}
            <header className={cx("header")}>
                <img src={LogoImg} />
            </header>
            <main className={cx("main")}>
                {isChrome && <img className={cx("illustration")} src={IlluImg} />}
                <section className={cx("section-login")}>
                    <EmailInput
                        form={formStore.email}
                        icon={MailImg}
                        label={"Email address"}
                        placeholder={"jordan@gmail.com"}
                    />
                    <PasswordInput
                        form={formStore.password}
                        icon={LockImg}
                        label={"Password"}
                        placeholder={"Applause123$"}
                        type="password"
                    />
                    <Button
                        className={cx(disableButton ? "button-disabled" : "")}
                        ctr={{ onSubmit }}
                        disabled={disableButton}>
                        Login
                    </Button>
                </section>
            </main>
        </div>
    );
};

Login.defaultProps = {};

export default Login;
