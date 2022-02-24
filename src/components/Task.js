import {FaTimes, FaTrashAlt} from 'react-icons/fa'


const Task = ({ task, deleteTask, toggle }) => {
  return (
      <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggle(task.id)}>
          <h3>{task.text} <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => deleteTask(task.id)}/></h3>
          <p>{task.day}</p>
      </div>
 )
}

export default Task
