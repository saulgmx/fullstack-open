import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  });

  function handleSearchValue(event) {
    let value = event.target.value;
    setSearchValue(value);
  }

  let filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div>
        find countries
        <input value={searchValue} onChange={handleSearchValue} />
      </div>
      <Countries value={filteredCountries} />
    </div>
  );
}

export default App;
