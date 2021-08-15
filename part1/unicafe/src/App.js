import React, { useState } from "react";

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = all === 0 ? 0 : (good - bad) / all;
  let positive = all === 0 ? 0 : good / all;
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={all} />
          <StatisticLine text={"average"} value={average} />
          <StatisticLine text={"positive"} value={`${positive} %`} />
        </tbody>
      </table>
    </div>
  );
};

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
