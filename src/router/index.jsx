import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Login } from "#screens";
import { ContextProvider } from "#store";

const router = createBrowserRouter([
    {
        path: "/home",
        element: (
            <ContextProvider>
                <Home />
            </ContextProvider>
        ),
    },
    {
        path: "*",
        element: (
            <ContextProvider>
                <Login />
            </ContextProvider>
        ),
    },
]);

export default router;
