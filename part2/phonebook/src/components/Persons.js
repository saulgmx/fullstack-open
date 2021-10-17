import React from "react";

const Persons = ({ persons, onDelete }) => {
  return (
    <div>
      {persons.map((x) => (
        <p key={x.id}>
          {`${x.name} ${x.number}`}
          <span>
            <button
              onClick={() => {
                onDelete(x);
              }}
            >
              delete
            </button>
          </span>
        </p>
      ))}
    </div>
  );
};

export default Persons;
