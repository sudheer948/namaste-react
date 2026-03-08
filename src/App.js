import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const number = 10000;

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="head">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
