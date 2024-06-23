import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "#library/components";
import { mergeStyles } from "#modules/utils";
import Context from "#store";
import LogoImg from "./assets/Logo.png";
import stylesheet from "./styles.module.css";

const Home = () => {
    const { cx } = mergeStyles(stylesheet);
    const { currentUser, setCurrentUser } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) navigate("/");
    }, []);

    const clickHander = () => {
        setCurrentUser(null);
    };

    return (
        <div className={cx("App")}>
            <header className={cx("header")}>
                <img src={LogoImg} />
            </header>
            <main className={cx("main")}>
                <h3>{`Welcome, ${currentUser?.name}!`}</h3>
                <Button ctr={{ onSubmit: clickHander }}>Log out</Button>
            </main>
        </div>
    );
};

Home.defaultProps = {};

export default Home;
