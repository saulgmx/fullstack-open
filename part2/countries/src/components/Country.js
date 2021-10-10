import React, { useState } from "react";
import CountryDetails from "./CountryDetails";

const Country = ({ value }) => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = (event) => setIsShow(isShow ? false : true);

  return (
    <div>
      <span key={value.name.common}>{value.name.common}</span>
      <button onClick={handleShow}>{isShow ? "hide" : "show"}</button>
      {isShow ? <CountryDetails value={value} /> : null}
    </div>
  );
};

export default Country;
