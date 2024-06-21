import validators from "./validators";

export default ({ formStore }) => {
    // formStore._setValidators(validators);

    const validateForm = () => {
        const formValidity = formStore._validate();
        const isFormInvalid = Object.keys(formValidity).some((key) => !formValidity[key]);

        return { formValidity, isFormInvalid };
    };

    return {
        validateForm,
    };
};
