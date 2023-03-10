import { useState } from "react";

export default function AddInputForm({ handleInputsInputChange }) {
  const [inputName, setInputName] = useState(""); // stores value of name of new input
  const [inputType, setInputType] = useState("text"); // stores value of type of new input

  function handleInputNameChange(event) {
    setInputName(event.target.value);
  }

  function handleInputTypeChange(event) {
    setInputType(event.target.value);
  }

  function handleOnClick(event) {
    event.preventDefault();
    handleInputsInputChange(inputName, inputType);
  }

  return (
    <div>
      <input
        type="text"
        name="inputNameInput"
        value={inputName}
        onChange={handleInputNameChange}
      />
      <br />
      <input
        type="radio"
        name="type"
        value="text"
        onChange={handleInputTypeChange}
        checked={inputType == "text"}
      />{" "}
      Text
      <input
        type="radio"
        name="type"
        value="number"
        onChange={handleInputTypeChange}
        checked={inputType == "number"}
      />{" "}
      Number
      <input
        type="radio"
        name="type"
        value="email"
        onChange={handleInputTypeChange}
        checked={inputType == "email"}
      />{" "}
      Email
      {/* <input
          type="radio"
          name="type"
          value="file"
          onChange={handleInputTypeChange}
          checked={inputType == "file"}
        />{" "}
        File */}
      <br />
      <button
        onClick={handleOnClick}
        type="button"
      >{`Add ${inputType} input`}</button>
    </div>
  );
}
