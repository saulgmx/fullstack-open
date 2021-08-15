import React, { useState } from "react";

const Button = (props) => (
  <>
    <button onClick={props.onClick}>{props.text}</button>
  </>
);

const Anecdote = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.anecdote}</p>
    <p>{`has ${props.votes} votes`}</p>
  </div>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(10)).map(Number.prototype.valueOf, 0)
  );

  const handleNextAnectdote = () => {
    const max = anecdotes.length - 1;
    const min = 0;
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    setSelected(randomNumber);
  };

  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  let selectedMostVotes = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <Anecdote
        title={"Anecdote of the day"}
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button onClick={handleVotes} text={"vote"} />
      <Button onClick={handleNextAnectdote} text={"next anecdote"} />
      <Anecdote
        title={"Anecdote with most votes"}
        anecdote={anecdotes[selectedMostVotes]}
        votes={votes[selectedMostVotes]}
      />
    </div>
  );
};

export default App;
