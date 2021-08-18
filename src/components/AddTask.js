import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  // onAddTask será chamada nesta função
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Field Task can not be empty");
      return;
    }

    onAddTask({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add day & time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <div style={{ width: "20px" }}>
          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          ></input>
        </div>
      </div>

      <input className="btn btn-block" type="submit" value="Save task" />
    </form>
  );
};

export default AddTask;
