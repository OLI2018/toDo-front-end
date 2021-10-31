import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((categories) => setCategories(categories));
  }, []);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/todos")
      .then((r) => r.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  const [categoryId, setCategoryId] = useState(null);


  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }


  const visibleTasks = tasks.filter(
    (task) => !categoryId || task.category_id === categoryId
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={categoryId} onSelectCategory={setCategoryId} />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask} />
        <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks} />
      </div>
    </div>
  );
}

export default App;
