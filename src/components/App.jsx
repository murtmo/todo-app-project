import React, {useState} from "react";

//component
import InputArea from "./InputArea";
import ToDoItem from "./TodoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(v) {
    const newValue = v;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItem => {
      return [...prevItem, inputText]
    })
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return (
        prevItems.filter( (item, index) => {
          return index !== id;
        })
      )
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onInputed={handleChange}
        onAdded={addItem}
        inputValue={inputText}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;