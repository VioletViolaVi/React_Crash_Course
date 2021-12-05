import Task from "./Task"

// shortcut: rafce (delete [import React from 'react'] above)
const Tasks = ({chores, onDelete}) => {
    return (
        <div>
            {chores.map(singleChore => (
                <Task key={singleChore.id} singleChore={singleChore} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Tasks
