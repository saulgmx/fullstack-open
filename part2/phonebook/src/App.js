import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    personService.getAll().then((data) => {
      setPersons(data);
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
      const personObject = { name: newName, number: newNumber, id: newId };
      personService.create(personObject).then((newPerson) => {
        setPersons(persons.concat(newPerson));
      });
    } else {
      var result = window.confirm(
        `${newName} is already added to the phonebook, replace the older number with a new one?`
      );
      if (result) {
        const person = persons.find((p) => p.name === newName);
        const changedPerson = { ...person, number: newNumber };
        personService
          .update(person.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : returnedPerson))
            );
          });
      }
    }
  }

  function deletePerson(person) {
    const result = window.confirm(`Delete ${person.name}?`);
    if (result) {
      personService.remove(person.id);
      setPersons(persons.filter((x) => x.id !== person.id));
    }
  }

  let filteredPersons = persons.filter(
    (p) =>
      !searchValue || p.name.toLowerCase().includes(searchValue.toLowerCase())
  );

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
      <Persons persons={filteredPersons} onDelete={deletePerson} />
    </div>
  );
};

export default App;
