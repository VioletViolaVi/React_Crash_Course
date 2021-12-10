import { FaTimes } from "react-icons/fa";

const Task = ({ singleChore, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${singleChore.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(singleChore.id)}
    >
      <h3>
        {singleChore.jobChore}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(singleChore.id)}
        />
      </h3>
      <p>{singleChore.deadline}</p>
      <p>Completed: {singleChore.reminder ? "YES" : "NO"}</p>
    </div>
  );
};

export default Task;
