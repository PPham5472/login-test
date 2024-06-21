import { useEffect } from "react";

export default ({ formStore, setIsButtonDisabled }) => {
    useEffect(() => {
        const isFormComplete = formStore._getValues().every((item) => (item.length > 0 ? true : false));
        if (isFormComplete) setIsButtonDisabled(false);
        else setIsButtonDisabled(true);
    }, [...formStore._getValues()]);
};
