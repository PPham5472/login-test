import React from "react";
import { Button } from "#library/components";
import { useForm } from "#modules/hooks";
import { mergeStyles } from "#modules/utils";
import IlluImg from "./assets/Illu.png";
import LockImg from "./assets/Lock.png";
import LogoImg from "./assets/Logo.png";
import MailImg from "./assets/Mail.png";
import { EmailInput, PasswordInput } from "./components";
import { useController } from "./hooks";
import stylesheet from "./styles.module.css";

const Login = () => {
    const { cx } = mergeStyles(stylesheet);
    const formStore = useForm({ email: "test@applausehq.com", password: "test1234!" });
    const {
        handlers: { onSubmit },
    } = useController({ form: formStore });

    return (
        <div className={cx("App")}>
            <header className={cx("header")}>
                <img src={LogoImg} />
            </header>
            <main className={cx("main")}>
                <img className={cx("illustration")} src={IlluImg} />
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
                    <Button ctr={{ onSubmit }}>Login</Button>
                </section>
            </main>
        </div>
    );
};

Login.defaultProps = {};

export default Login;
