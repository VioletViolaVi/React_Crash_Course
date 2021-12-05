// shortcut: rafce (delete [import React from 'react'] above)

import { useState } from "react";

const Tasks = () => {
    const [chores, setChores] = useState(
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
        ]
    )
    return (
        <div>
            {
                chores.map(chore => 
                <h3 key={chore.id}>
                    {chore.jobChore}
                </h3>)
            }
        </div>
    )
}

export default Tasks
