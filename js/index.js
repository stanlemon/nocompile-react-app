import React from "https://unpkg.com/es-react/react.js";
import ReactDOM from "https://unpkg.com/es-react/react-dom.js";
import htm from "https://unpkg.com/htm?module";
import { App } from "./App.js";

window.html = htm.bind(React.createElement);

ReactDOM.render(App(), document.getElementById("app"));
