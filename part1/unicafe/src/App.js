import React, { useState } from "react";

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ value }) => <p>{value}</p>;

const App = () => {
  const firstTitle = "give feedback";
  const secondTitle = "statistics";
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedBack = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedBack = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedBack = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header title={firstTitle} />
      <Button onClick={handleGoodFeedBack} text={"good"} />
      <Button onClick={handleNeutralFeedBack} text={"neutral"} />
      <Button onClick={handleBadFeedBack} text={"bad"} />
      <Header title={secondTitle} />
      <Display value={good} />
      <Display value={neutral} />
      <Display value={bad} />
    </div>
  );
};

export default App;
