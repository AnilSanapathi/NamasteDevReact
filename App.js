import React from "react";
import ReactDOM from "react-dom/client";
const element = React.createElement("h1", { id: "new-id" }, "Hello Hyderabad");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
