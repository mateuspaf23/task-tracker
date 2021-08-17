import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Chores",
      day: "17/08 (Today)",
      reminder: true,
    },
    {
      id: 2,
      text: "Homework",
      day: "17/08 (Today)",
      reminder: true,
    },
    {
      id: 3,
      text: "Programming",
      day: "17/08 (Today)",
      reminder: true,
    },
    {
      id: 4,
      text: "Work out",
      day: "17/08 (Today)",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = () => {};

  // Delete task
  const deleteTask = (id) => {
    console.log(`Task ${id} deleted`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "All done!"
      )}
    </div>
  );
}

export default App;
