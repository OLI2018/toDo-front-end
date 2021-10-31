import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  if (!categoryId && categories[0]) {
    setCategoryId(categories[0].id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        category_id: categoryId,
      }),
    })
      .then((r) => r.json())
      .then((newTask) => {
        onTaskFormSubmit(newTask);
        setText("");
      });
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;