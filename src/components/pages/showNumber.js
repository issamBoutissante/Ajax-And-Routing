import React from "react";

const showNumber = (props) => {
  console.log(props);
  return <h1>The number that i received is {props.match.params.number} </h1>;
};

export default showNumber;
