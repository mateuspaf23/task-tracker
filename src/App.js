import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    console.log(`Task ${id} deleted`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        // Se o id recebido como argumento for igual ao id da iteração atual
        // o mesmo objeto é mapeado porém com a chave reminder invertida
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        showAddTask={showAddTask}
        onAddTask={() => setShowAddTask(!showAddTask)}
      />

      {showAddTask && <AddTask onAddTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggleReminder={toggleReminder}
        />
      ) : (
        "All done!"
      )}
    </div>
  );
}

export default App;
