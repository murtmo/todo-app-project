import React, {useState} from "react";

function ToDoItem(props) {
  const [isDone, setIsDone ] = useState(false);

  function handleClick() {
    if (isDone) setIsDone(false)
    else setIsDone(true);
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
