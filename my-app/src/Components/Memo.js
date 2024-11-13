import React, { memo } from "react";
import { useState } from "react";

export default function Memo() {
  const [name, setName] = useState("");
  return (
    <>
      <label>
        name{" : "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    </>
  );
}
const Add = memo(function Add({ name }) {
  console.log(name, "memo print here ");
  return (
    <>
      <div>{Add}</div>
    </>
  );
});
