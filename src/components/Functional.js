import React from "react";

// export const Greet = () => <h1>Hello from Greet Const</h1>;

// function Hello() {
//   return <h1>Hello functional component</h1>;
// }

// arrow function syntax
// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

// Destructuring

const Greet = ({ name, heroName } = this.props) => {
  console.log(name, heroName);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
// const Greet = ({ name, heroName }) => {
//   console.log(name);
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };
// export default Hello;

export default Greet;
