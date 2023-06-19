import React, { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h2>
        URL <span>Shortener</span>
      </h2>
      <div>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="Paste a Link"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
