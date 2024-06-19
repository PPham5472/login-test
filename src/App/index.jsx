import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "#router";
import "./index.scss";

function App() {
    return (
        <div id="app">
            <RouterProvider router={router} />
        </div>
    );
}

App.defaultProps = {};

export default App;
