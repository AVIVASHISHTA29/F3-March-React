import React from "react";
import "./styles.css";

function MyComponent({ name }) {
  var num = 10;

  function sayHello() {
    console.log("Hello World");
  }

  function MouseUpFnc() {
    console.log("Mouse Up");
  }

  function MouseDownFnc() {
    console.log("Mouse Down");
  }

  function MouseHover() {
    console.log("Mouse Hover");
  }

  // How do i call my JS functions inside html

  return (
    <div className="component-wrapper">
      <h1>Hi My Name is {name}</h1>
      <h1>{(num + 10) * 1000}</h1>
      <p style={{ fontWeight: "bold" }}>Styled P tag</p>
      <button
        onClick={sayHello}
        // onMouseUp={(e) => MouseUpFnc()}
        // onMouseDown={MouseDownFnc}
        onMouseOver={() => MouseHover()}
      >
        Click Me
      </button>
      <input onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default MyComponent;
