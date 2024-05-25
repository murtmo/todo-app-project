import React from "react";

function InputArea(props) {

  return (
    <div className="form">
      <input
        onChange={ (event) => {
          props.onInputed(event.target.value);
        }}
        value={props.inputValue}
        type="text" />
      <button
        onClick={ () => {
          props.onAdded();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
