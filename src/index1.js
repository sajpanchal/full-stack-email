import React from "react";
import ReactDOM from "react-dom";

// this is the JSX const having a JSX statement.
const element = <h1>Hello World</h1>;

/* ReactDOM is a class having a render method.
// it will take the jsx code and converts it to DOM.
// it will display that dom to the index.html page in a specified DOM Element*/
ReactDOM.render(element, document.getElementById("root"));
