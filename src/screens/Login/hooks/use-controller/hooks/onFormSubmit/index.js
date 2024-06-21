export default ({ formStore, setCurrentUser, setIsLoading }) => {
    setIsLoading(true);

    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formStore._getForm()),
    })
        // .then(async (apiRes) => {
        //     const res = await apiRes.json();
        //     return { statusCode: apiRes?.status, res };
        // })
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
