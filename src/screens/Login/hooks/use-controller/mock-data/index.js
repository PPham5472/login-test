const users = [
    { email: "test@applausehq.com", password: "Test1234!", name: "Test User" },
    { email: "peter@applausehq.com", password: "Cookies123!", name: "Peter Pham" },
];

export default () => {
    const fakeFetch = async (_, options) => {
        const { body: bodyJSON } = options;
        const body = JSON.parse(bodyJSON);
        const { email, password } = body;

        //Input Validation
        if (password.length > 255)
            return {
                statusCode: 200,
                res: { status: "failed", error: "Email must be less than 255 characters long." },
            };

        //Credentials Validation
        const currentUser = users.filter((user) => user.email === body.email)[0];
        if (!currentUser) return { statusCode: 400, res: { status: "failed", error: "Email not found." } };

        if (currentUser?.password === body.password) {
            return {
                statusCode: 200,
                res: { status: "success", user: { email: currentUser?.email, name: currentUser?.name } },
            };
        }

        return { statusCode: 400, res: { status: "failed", error: "Invalid Login" } };
    };

    return {
        fakeFetch,
    };
};
