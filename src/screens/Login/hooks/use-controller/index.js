import { useContext, useState } from "react";
import context from "#store";
import { onFormSubmit, useEffectCheckIsFormComplete, useValidate } from "./hooks";
import mockData from "./mock-data";

const { fakeFetch } = mockData();
window.fetch = fakeFetch;

export default ({ formStore }) => {
    const { setCurrentUser } = useContext(context);
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const { validateForm } = useValidate({ formStore });

    useEffectCheckIsFormComplete({ formStore, setIsButtonDisabled });

    const onSubmit = () => {
        const { isFormInvalid, formValidity } = validateForm(formStore);
        if (isFormInvalid) return;

        onFormSubmit({ formStore, setCurrentUser, setIsLoading });
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
