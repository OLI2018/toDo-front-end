import React from "react";

function Task({ task, onDeleteTask }) {

  function handleClick() {
    fetch(`http://localhost:9292/todos/${task.id}`, {
      method: "DELETE",
    });


    onDeleteTask(task.id);
  }

  return (
    <div className="task">
      <div className="label">{task.category.name}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;


