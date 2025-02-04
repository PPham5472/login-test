export default {
    email: (email) => {
        //Intentional Bug
        if (email.length < 1) return false;

        return !email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    },
    password: (password) => {
        //Intentional Bug - changed to not allow 2 or more symbols
        // const expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()\-_+=[\]{}|;:'",<>./?` ]).{8,}$/;
        const expression =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()\-_+=[\]{}|;:'",<>./?` ])(?!.*[~!@#$%^&*()\-_+=[\]{}|;:'",<>./?` ].*[~!@#$%^&*()\-_+=[\]{}|;:'",<>./?` ]).{8,}$/;

        return !expression.test(password);
    },
};
