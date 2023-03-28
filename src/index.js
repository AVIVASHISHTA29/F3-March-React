import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<MyComponent />);
root.render(
  <div>
    <MyComponent />
    <MyHeader />
  </div>
);

// What is jsx?
// JSX is combination of js and html
// JSX is when you return html code through js functions

function MyComponent() {
  return (
    <div>
      <h1>Hi This is A Component</h1>
      <p></p>
    </div>
  );
}

function MyHeader() {
  return (
    <div id="my-header">
      <p>This is my header</p>
    </div>
  );
}

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("hi");
//   });
// }

// myPromise().then;

// function myObj() {
//   return {
//     name: "avi",
//     age: 21,
//   };
// }

// myObj().name
