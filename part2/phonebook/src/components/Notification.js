import React from "react";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  if (message.isError)
    return <div className={"error"}>{message.description}</div>;
  return <div className={"success"}>{message.description}</div>;
};

export default Notification;
