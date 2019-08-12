import React from "react";
import Input from "./Input.js";
import Button from "./Button.js";
export default ({ setValue, onClick, username }) => (
  <section>
    <Input name="username" setValue={setValue} value={username} />
    {/* <Input name="password" setValue={setValue} value={password} /> */}
    <Button onClick={() => onClick()} value="Search" />
    {/* <button type="button" onClick={() => clearFilter()}>
    Clear Filter
  </button> */}
  </section>
);
