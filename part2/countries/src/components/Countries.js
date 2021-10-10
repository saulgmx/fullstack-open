import React from "react";
import Country from "./Country";
import CountryDetails from "./CountryDetails";

const Countries = (props) => {
  if (props.value.length === 1) {
    let country = props.value[0];
    return <CountryDetails value={country} />;
  } else if (props.value.length < 10) {
    return (
      <div>
        {props.value.map((x) => (
          <Country key={x.name.common} value={x} />
        ))}
      </div>
    );
  } else if (props.value.length > 10) {
    return <div>{"Too many matches, specify another filter"}</div>;
  } else return <div></div>;
};

export default Countries;
