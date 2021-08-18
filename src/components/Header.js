import { useLocation } from "react-router-dom";

import Button from "./Button";

const Header = ({ title, onAddTask, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1> {title} </h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onAddTask}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
