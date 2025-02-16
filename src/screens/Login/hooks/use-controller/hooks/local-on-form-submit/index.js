export default ({ formStore, setCurrentUser, setIsLoading, setDisplayToast }) => {
    setIsLoading(true);

    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formStore._getForm()),
    }).then(({ statusCode, res }) => {
        setIsLoading(false);

        if (statusCode !== 200) {
            const { errorCode } = res;

            switch (errorCode) {
                case "E0":
                    //Intentional Bug - Does not display Toast
                    setDisplayToast(null);
                    break;
                case "E1":
                    setDisplayToast("Email must be less than 255 characters long.");
                    break;
                case "E2":
                    setDisplayToast("Cannot find a user with this email address.");
                    break;
                case "E3":
                    setDisplayToast("Invalid login credentials. Please try again.");
                    break;
                default:
                    setDisplayToast(true);
                    break;
            }
        } else {
            setCurrentUser(res?.user);
        }
    });
};
