import { useState } from "react";
import "./App.css";
import DropDown from "./DropDown";

function App() {
  const [selected, setSelected] = useState("Choose One");

  return (
    <>
      <DropDown selected={selected} setSelected={setSelected} />
    </>
  );
}

export default App;
