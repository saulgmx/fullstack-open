import React from "react";

const CountryDetails = ({ value }) => {
  return (
    <div>
      <h2>{value.name.common}</h2>
      <p>{`capital ${value.capital}`}</p>
      <p>{`population ${value.population}`}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(value.languages).map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <img
        alt={`flag ${value.name.common}`}
        src={value.flags.svg}
        width={"100px"}
      />
    </div>
  );
};

export default CountryDetails;
