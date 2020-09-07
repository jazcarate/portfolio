import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root");

if (root.hasChildNodes()) {
    //ReactDOM.hydrate(<App />, root);
    //No need to hydratate
} else {
    ReactDOM.render(<App />, root);
}