import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <div style={horizontal}>
        <div>
          <h3> {task.text} </h3>
          <p> {task.day} </p>
        </div>
        <FaTimes onClick={() => onDelete(task.id)} />
      </div>
    </div>
  );
};

const horizontal = {
  marginRight: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default Task;
