import React from "react";
function NameList() {
  //   const names = ["Bruce", "Clark", "Diana"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 3,
      name: "Bruce",
      age: 30,
      skill: "vue",
    },
  ];
  const personList = persons.map((person) => (
    <h2>
      I am {person.name}. I am {person.age} years old. I know {person.skill}
    </h2>
  ));

  return (
    <div>
      <h1>PersonList:</h1>
      <div>{personList} </div>
    </div>
  );
}

export default NameList;
