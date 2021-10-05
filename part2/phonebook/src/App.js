import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  function handleSearchChange(event) {
    let value = event.target.value;
    setSearchValue(value);
  }

  function handleNameChange(event) {
    let name = event.target.value;
    setNewName(name);
  }

  function handleNumberChange(event) {
    let number = event.target.value;
    setNewNumber(number);
  }

  function addPerson(event) {
    event.preventDefault();

    let isDuplicateName = persons.some((x) => x.name === newName);
    if (!isDuplicateName) {
      let newId = persons.length + 1;
      setPersons(
        persons.concat({ name: newName, number: newNumber, id: newId })
      );
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchValue} onChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        onChangeName={handleNameChange}
        onChangeNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue} />
    </div>
  );
};

export default App;
