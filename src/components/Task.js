  
import React from "react";

// function Task({ text, category, onDeleteTask }) {
  function Task({ task, text, category, onDeleteTask }) {
  // function handleClick() {
  //   onDeleteTask(text);
  // }

  const { id } = task;

  function handleClick() {
    fetch(`http://localhost:9292/todos${id}`, {
      method: "DELETE",
    });

    onDeleteTask(id);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;


