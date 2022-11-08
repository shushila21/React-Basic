import React from "react";

function Siri() {
  // With Jsx i.e, element with html
  //   return (
  //     <div className='dummyClass'>
  //       <h1>Hello to Jsx</h1>
  //     </div>
  //   );
  // without Jsx

  //   return React.createElement("div", null, "Hello");

  //   syntax to implement with HtmlElement

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello1")
  );
}

export default Siri;
