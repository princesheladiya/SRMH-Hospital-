import { useState } from "react";
import NoteContext from "./NotContext";

const NoteState = (props) => {
  const s1 = {
    title: "set title",
    subtitle: "set subtitle",
  };

  const [state, Setstate] = useState(s1);

  const update = () => {
    setTimeout(() => {
      Setstate({ title: "About us", subtitle: "About subtitle" });
    }, 5000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
