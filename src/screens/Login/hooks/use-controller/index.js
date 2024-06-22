import { useContext, useState } from "react";
import context from "#store";
import { onFormSubmit, useEffectCheckIsFormComplete } from "./hooks";
import mockData from "./mock-data";

const { fakeFetch } = mockData();
window.fetch = fakeFetch;

export default ({ formStore }) => {
    const { setCurrentUser } = useContext(context);
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffectCheckIsFormComplete({ formStore, setIsButtonDisabled });

    const onSubmit = () => {
        const { invalidCount } = formStore._validate();
        console.log(invalidCount);
        if (invalidCount) return;

        onFormSubmit({ formStore, setCurrentUser, setIsLoading });
    };

    return {
        handlers: {
            onSubmit,
        },
        state: {
            isButtonDisabled,
            setIsButtonDisabled,
        },
    };
};
