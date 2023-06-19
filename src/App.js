import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./Components/BackgroundAnimate";
import InputShortener from "./Components/InputShortener";
import LinkResult from "./Components/LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="Container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
