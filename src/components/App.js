import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// выше оригинальный код, я удаляю из него TASKS, так как все таски будут браться из базы данных JSON 

import { CATEGORIES } from "../data";

function App() {
  // const [tasks, setTasks] = useState(TASKS);
  // выше оригинальный код, я беру все тасаки из data файла, но в моем случае, я должен делать запрос на сервер JSON для получения этих тасков 
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9292/todos")
        .then((r) => r.json())
        .then((tasks) => setTasks(tasks));
    }, []);

    
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // function handleDeleteTask(deletedTaskText) {
  //   setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  // }


  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }


  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")} onTaskFormSubmit={handleAddTask}/>
        <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks} />
      </div>
    </div>
  );
}

export default App;
