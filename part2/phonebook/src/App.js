import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
