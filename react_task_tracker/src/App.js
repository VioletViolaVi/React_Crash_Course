import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [chores, setChores] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setChores(tasksFromServer)
    }
    getTasks()
  }, [])

    // FETCH CHORES
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/chores")
      const data = await res.json()
      
      return data
    }

    // ADDS TASK
    const addTask = async (singleChore) => {
      const res = await fetch("http://localhost:5000/chores", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(singleChore),
      })
      const data = await res.json()
      setChores([...chores, data])

      /* 
      const id = Math.floor(Math.random() * 1000) + 1
      const newChore = {id, ...singleChore}
      setChores([...chores, newChore])
      */
    }

    // DELETES TASK
    const deleteChore = async id => {
      await fetch(`http://localhost:5000/chores/${id}`,{
        method: "DELETE"
      })

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
