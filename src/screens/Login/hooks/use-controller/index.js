import { useContext, useEffect, useState } from "react";
import context from "#store";
import { validateForm } from "./helpers";
import mockData from "./mock-data";

const { fakeFetch } = mockData();
window.fetch = fakeFetch;

export default ({ formStore }) => {
    const { setCurrentUser } = useContext(context);
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const isFormComplete = formStore._values.every((item) => (item.length > 0 ? true : false));
        if (isFormComplete) setIsButtonDisabled(false);
        else setIsButtonDisabled(true);
    }, [...formStore._values]);

    const onSubmit = () => {
        setIsLoading(true);

        const formValues = formStore._getForm();
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        })
            // .then(async (apiRes) => {
            //     const res = await apiRes.json();
            //     return { statusCode: apiRes?.status, res };
            // })
            .then(({ statusCode, res }) => {
                setIsLoading(false);

                console.log(statusCode, res);
                validateForm(formStore._getForm());

                if (statusCode !== 200) {
                    console.log("Error", res);
                    //TODO: Trigger Error Toast
                } else {
                    setCurrentUser(res?.user);
                }
            });
    };

    return {
        handlers: {
            onSubmit,
        },
        state: {
            isLoading,
            setIsLoading,
            isButtonDisabled,
            setIsButtonDisabled,
        },
    };
};
