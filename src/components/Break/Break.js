import React from "react";
import "./Break.css";

const test = (value) => {
  console.log("cliked", value, typeof value);
};

const Break = (props) => {
  const { value } = props;
  return (
    <div className="break">
      <p onClick={() => test(value)}>{value}</p>
    </div>
  );
};

export default Break;
