import React from "react";
import ReactDOM from "react-dom/client";

// Creating nested elements using createElement
const element1 = React.createElement("h1", { key: 1 }, "Hello This is H1");
const element2 = React.createElement("h2", { key: 2 }, "Hello This is H2");
const element3 = React.createElement("h3", { key: 3 }, "Hello This is H3");

const divElement = React.createElement("div", { className: "title" }, [
  element1,
  element2,
  element3,
]);

const H1Element = () => <h1>Component Composition</h1>;

// Creating same elememts using JSX
const jsxCode = (
  <div className="title">
    <H1Element />
    <h2>Hello This is H2</h2>
    <h3>Hello This is H3</h3>
  </div>
);

// Creating Same Elements Using Functional Components
const Header = () => {
  return (
    <div className="title">
      {/* <h1>Hello This is H1</h1> */}
      <H1Element />
      <h2>Hello This is H2</h2>
      <h3>Hello This is H3</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
