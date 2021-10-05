import React from "react";

const Persons = ({ persons, searchValue }) => {
  let filteredPersons = persons.filter(
    (p) =>
      !searchValue || p.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      {filteredPersons.map((x) => (
        <p key={x.id}>{`${x.name} ${x.number}`}</p>
      ))}
    </div>
  );
};

export default Persons;
