const users = [
    { email: "test@applausehq.com", password: "test1234!" },
    { email: "peter@applausehq.com", password: "Cookies123!" },
];

export default () => {
    const fakeFetch = async (_, options) => {
        const { body } = options;

        const currentUser = users.filter((user) => user.email === body.email)[0];
        if (!currentUser) throw new Error("Invalid Login");

        if (currentUser?.password === body.password) {
            return { status: "success", userEmail: currentUser?.email };
        }

        throw new Error("Invalid Login 2");
    };

    return {
        fakeFetch,
    };
};
