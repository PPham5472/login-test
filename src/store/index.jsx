import e from "express";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext({
    setLabelsList: () => {},
});

export const ContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate("/home");
        } else {
            navigate("/login");
        }
    }, [currentUser]);

    const ctx = {
        currentUser,
        setCurrentUser,
    };

    return <Context.Provider value={ctx}>{props.children}</Context.Provider>;
};

export default Context;
