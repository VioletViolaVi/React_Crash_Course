import {FaTimes} from "react-icons/fa";

const Task = ({singleChore, onDelete}) => {
    return (
        <div className="task">
            <h3>
                {singleChore.jobChore} 
                <FaTimes style={{color: "red", cursor:"pointer"}} 
                onClick={() => onDelete(singleChore.id)}/>
            </h3>
            <p>{singleChore.deadline}</p>
            <p>Completed: {singleChore.reminder ? "YES" : "NO"}</p>
        </div>
    )
}

export default Task
