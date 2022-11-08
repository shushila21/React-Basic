import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h1>From Child Component</h1>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler("child-shushila(parameter)")}>
        Greet Parent
      </button>
    </div>
  );
}

export default ChildComponent;
