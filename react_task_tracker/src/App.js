import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [chores, setChores] = useState([]);

    // ADDS TASK
    const addTask = (singleChore) => {
      const id = Math.floor(Math.random() * 1000) + 1
      const newChore = {id, ...singleChore}
      setChores([...chores, newChore])
    }

    // DELETES TASK
    const deleteChore = id => {
      setChores(chores.filter(singleChore => singleChore.id !== id))
    }

    // TOGGLE REMINDER
    const toggleReminder = id => {
      setChores(chores.map(singleChore => singleChore.id === id 
        ? {...singleChore, reminder: !singleChore.reminder} 
        : singleChore))
    }

  return (
    <div className="container">
      <Header onAdd={() =>
        setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} 
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
        {
          chores.length > 0 ? (
            <Tasks chores={chores} onDelete={deleteChore} onToggle={toggleReminder} />) 
            : ("No chores to left to do.")
        } 
    </div>
  );
}

export default App;
