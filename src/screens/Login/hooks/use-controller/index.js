import { useContext, useState } from "react";
import context from "#store";
import mockData from "./mock-data";

const { fakeFetch } = mockData();
// window.fetch = fakeFetch;

export default ({ form }) => {
    const { setCurrentUser } = useContext(context);
    const [isLoading, setIsLoading] = useState();

    const onSubmit = () => {
        setIsLoading(true);

        const formValues = form._getForm();
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        })
            .then((apiRes) => ({ statusCode: apiRes?.status, res: apiRes?.json() }))
            .then(({ statusCode, res }) => {
                setIsLoading(false);

                console.log(statusCode, res);

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
    };
};
