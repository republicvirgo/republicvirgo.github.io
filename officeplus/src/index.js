import React from "react";
import ReactDOM from "react-dom";

//import { loadCSS } from "fg-loadcss/src/loadCSS";
/*componentDidMount() {
  loadCSS(
    "https://cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css",
    document.querySelector("#insertion-point-jss")
  );
}*/

import App from "./components/App";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import "mdbreact/dist/css/mdb.css";

import "semantic-ui-css/semantic.min.css";

//<Router basename={"/officeplus"}>

ReactDOM.render(
  <Router basename={"/officeplus"}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
