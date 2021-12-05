import Task from "./Task"

// shortcut: rafce (delete [import React from 'react'] above)
const Tasks = ({chores}) => {
    return (
        <div>
            {chores.map(singleChore => (
                <Task key={singleChore.id} singleChore={singleChore} />
            ))}
        </div>
    )
}

export default Tasks
