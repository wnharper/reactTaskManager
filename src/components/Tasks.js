import Task from "./Task"

const Tasks = ({ tasks, deleteTask, toggle }) => {
  return (
    <>
        {tasks.map((task) => <Task key={task.id} task={task} deleteTask={deleteTask} toggle={toggle}/>)}
    </>
  )
}

export default Tasks