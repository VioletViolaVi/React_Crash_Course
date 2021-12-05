import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [chores] = useState(
    [
      {
          id: 1,
          jobChore: "Clean laptop", 
          deadline: "23rd Dec 2021",
          reminder: true
      },
      {
          id: 2,
          jobChore: "Do laundry", 
          deadline: "16th Dec 2021",
          reminder: false
      },
      {
          id: 3,
          jobChore: "Throw away bin", 
          deadline: "10th Dec 2021",
          reminder: true
      }, 
      {
          id: 4,
          jobChore: "Eat fruit",
          deadline: "5th Dec 2021",
          reminder: true
      }
    ])
  return (
    <div className="container">
      <Header />
      <Tasks chores={chores}/>
    </div>
  );
}

export default App;
