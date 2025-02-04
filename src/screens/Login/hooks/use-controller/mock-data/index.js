const users = [
    { email: "test@applausehq.com", password: "Test1234!", name: "Test User" },
    { email: "peter@applausehq.com", password: "Applause123!", name: "Peter Pham" },
];

export default () => {
    const fakeFetch = async (_, options) => {
        const { body: bodyJSON } = options;
        const body = JSON.parse(bodyJSON);
        const { email, password } = body;

        //Input Validation
        if (email.length > 255)
            return {
                statusCode: 400,
                res: {
                    status: "failed",
                    error: "Email must be less than 255 characters long",
                    errorCode: "E0",
                },
            };
        if (password.length > 255)
            return {
                statusCode: 400,
                res: {
                    status: "failed",
                    error: "Password must be less than 255 characters long.",
                    errorCode: "E1",
                },
            };

        //Credentials Validation
        const currentUser = users.find((user) => user.email === email);
        if (!currentUser)
            return {
                statusCode: 400,
                res: { status: "failed", error: "Email not found.", errorCode: "E2" },
            };

        //Intentional Bug
        if (currentUser.password.toLowerCase() === password.toLowerCase()) {
            return {
                statusCode: 200,
                res: { status: "success", user: { email: currentUser?.email, name: currentUser?.name } },
            };
        }

        return { statusCode: 400, res: { status: "failed", error: "Invalid Login", errorCode: "E3" } };
    };

    return {
        fakeFetch,
    };
};
