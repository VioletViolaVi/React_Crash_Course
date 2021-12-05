// shortcut: rafce (delete [import React from 'react'] above)
const Tasks = ({chores}) => {
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
