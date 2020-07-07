import React from "react";
import Person from "./Person";

function PersonList() {

  const persons = [
    {
      id: 0,
      name: 'Diego',
      age: 24
    },
    {
      id: 1,
      name: 'Carlos',
      age: 25
    },
    {
      id: 2,
      name: 'Wero',
      age: 13
    },
    {
      id: 3,
      name: 'Rambo',
      age: 4
    }
  ];

  const personList = persons.map(person => <Person key={person.id} person={person}/>);

  return (
    <div>
      {personList}
    </div>
  );
}

export default PersonList;
