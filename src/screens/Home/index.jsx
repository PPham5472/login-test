import React from "react";
import Illu from "./assets/Illu.png";
import Logo from "./assets/Logo.png";
import Mail from "./assets/Mail.png";
import "./styles.css";

const Home = () => {
    return (
        <div className="App">
            <header className="header">
                <img src={Logo} />
            </header>
            <main className="main">
                <img className="illustration" src={Illu} />
                <section className="section-login">
                    <label className="input-label">
                        <img className={"mail"} src={Mail} />
                        Email address
                    </label>
                    <input className="input" placeholder="jordan@gmail.com" />
                    <label className="input-label">Password</label>
                    <input className="input" placeholder="Applause123$" />
                </section>
            </main>
        </div>
    );
};

Home.defaultProps = {};

export default Home;
