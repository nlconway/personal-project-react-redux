import React from "react";
export default ({ name, value, setValue }) => (
  <input
    type="text"
    value={value}
    onChange={evt => setValue(name, evt.target.value)}
  />
);
