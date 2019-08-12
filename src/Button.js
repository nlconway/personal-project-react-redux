import React from "react";
export default ({ value, onClick }) => (
  <button onClick={() => onClick()}>{value}</button>
);
