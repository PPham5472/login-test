import { useState } from "react";
import mockData from "./mock-data";

const { fakeFetch } = mockData();
window.fetch = fakeFetch;

export default ({ form }) => {
    const [isLoading, setIsLoading] = useState();

    const onSubmit = () => {
        setIsLoading(true);

        const formValues = form._getForm();
        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: formValues,
        })
            .then((res) => {
                setIsLoading(false);
                console.log("1", res);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log("2", err);
            });
    };

    return {
        handlers: {
            onSubmit,
        },
    };
};
