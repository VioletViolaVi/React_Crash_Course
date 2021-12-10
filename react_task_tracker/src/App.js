import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddChore, setShowAddChore] = useState(false)
  const [chores, setChores] = useState([]);

  useEffect(() => {
    const getChores = async () => {
      const choresFromServer = await fetchChores()
      setChores(choresFromServer)
    }
    getChores()
  }, [])

    // FETCH CHORES
    const fetchChores = async () => {
      const res = await fetch("http://localhost:5000/chores")
      const data = await res.json()
      
      return data
    }

    // FETCH CHORE (1!!!)
    const fetchChore = async id => {
      const res = await fetch(`http://localhost:5000/chores/${id}`)
      const data = await res.json()
      
      return data
    }

    // ADDS CHORE
    const addChore = async (singleChore) => {
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

    // DELETES CHORE
    const deleteChore = async id => {
      await fetch(`http://localhost:5000/chores/${id}`,{
        method: "DELETE"
      })

      setChores(chores.filter(singleChore => singleChore.id !== id))
    }

    // TOGGLE REMINDER
    const toggleReminder = async id => {
      const choreToToggle = await fetchChore(id);
      const updatedChore = {...choreToToggle, reminder : !choreToToggle.reminder}

      const res = await fetch(`http://localhost:5000/chores/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedChore)
      })

      const data = await res.json();

      setChores(chores.map(singleChore => singleChore.id === id 
        ? {...singleChore, reminder: !singleChore.reminder} 
        : singleChore))
    }

  return (
      <Router>
        <div className="container">
          <Header onAdd={() =>
            setShowAddChore(!showAddChore)} 
            showAdd={showAddChore} 
          />
          <Routes>
            <Route path="/" exact render={props => (
              <>
                {showAddChore && <AddTask onAdd={addChore}/>}
                {
                  chores.length > 0 ? (
                    <Tasks chores={chores} onDelete={deleteChore} onToggle={toggleReminder} />) 
                    : ("No chores to left to do.")
                }                      
              </>
            )} />
          </Routes>

          <Routes>
            <Route path="/about" component={About} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
