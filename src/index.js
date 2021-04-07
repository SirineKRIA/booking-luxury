import React from "react";

/** Import react-router-dom features */
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

/** Import App component */
import App from "./App";

/** Import css file */
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
