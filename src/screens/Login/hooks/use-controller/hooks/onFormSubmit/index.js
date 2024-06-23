export default ({ formStore, setCurrentUser, setIsLoading, setDisplayToast }) => {
    setIsLoading(true);

    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formStore._getForm()),
    })
        .then(async (apiRes) => {
            const res = await apiRes.json();
            return { statusCode: apiRes?.status, res };
        })
        .then(({ statusCode, res }) => {
            setIsLoading(false);

            console.log("1", statusCode, res);

            if (statusCode !== 200) {
                const { errorCode } = res;
                console.log("2", errorCode);

                switch (errorCode) {
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
