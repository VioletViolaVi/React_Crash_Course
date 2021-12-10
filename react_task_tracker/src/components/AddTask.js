import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [jobChore, setJobChore] = useState("");
  const [deadline, setDeadline] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!jobChore) {
      alert("Please add a chore");
      return;
    }
    onAdd({ jobChore, deadline, reminder });

    setJobChore("");
    setDeadline("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Chore</label>
        <input
          type="text"
          placeholder="Add Job Chore"
          value={jobChore}
          onChange={(e) => setJobChore(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Deadline</label>
        <input
          type="text"
          placeholder="Add Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Chore" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
