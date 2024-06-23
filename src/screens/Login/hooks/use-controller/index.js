import { useContext, useState } from "react";
import context from "#store";
import { localOnFormSubmit, onFormSubmit, useEffectCheckIsFormComplete } from "./hooks";

//Local Testing (Fake BE endpoint)
import mockData from "./mock-data";
const { fakeFetch } = mockData();
if (process.env.ENVIRONMENT === "DEV") window.fetch = fakeFetch;

export default ({ formStore }) => {
    const { setCurrentUser } = useContext(context);
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [displayToast, setDisplayToast] = useState(false);

    useEffectCheckIsFormComplete({ formStore, setIsButtonDisabled });

    const onSubmit = () => {
        const { invalidCount } = formStore._validate();
        if (invalidCount) return;

        if (process.env.ENVIRONMENT === "DEV") {
            localOnFormSubmit({ formStore, setCurrentUser, setIsLoading, setDisplayToast });
        } else {
            onFormSubmit({ formStore, setCurrentUser, setIsLoading, setDisplayToast });
        }
    };

    return {
        handlers: {
            onSubmit,
        },
        state: {
            isButtonDisabled,
            setIsButtonDisabled,
            displayToast,
            setDisplayToast,
        },
    };
};
