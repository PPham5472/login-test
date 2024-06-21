import React from "react";
import { useForm } from "#modules/hooks";
import IlluImg from "./assets/Illu.png";
import LockImg from "./assets/Lock.png";
import LogoImg from "./assets/Logo.png";
import MailImg from "./assets/Mail.png";
import { Button } from "#library/components";
import { EmailInput, PasswordInput } from "./components";
import { useController } from "./hooks";
import "./styles.css";

const Home = () => {
    const formStore = useForm({ email: "test@applausehq.com", password: "test1234!" });
    const {
        handlers: { onSubmit },
    } = useController({ form: formStore });

    return (
        <div className="App">
            <header className="header">
                <img src={LogoImg} />
            </header>
            <main className="main">
                <img className="illustration" src={IlluImg} />
                <section className="section-login">
                    <EmailInput
                        form={formStore.email}
                        icon={MailImg}
                        iconClassName={"mail"}
                        label={"Email address"}
                        placeholder={"jordan@gmail.com"}
                    />
                    <PasswordInput
                        form={formStore.password}
                        icon={LockImg}
                        iconClassName={"padlock"}
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

Home.defaultProps = {};

export default Home;
