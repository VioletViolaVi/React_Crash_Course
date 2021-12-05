const Task = ({singleChore}) => {
    return (
        <div className="task">
            <h3>{singleChore.jobChore}</h3>
            <p>{singleChore.deadline}</p>
            <p>Completed: {singleChore.reminder ? "YES" : "NO"}</p>
        </div>
    )
}

export default Task
