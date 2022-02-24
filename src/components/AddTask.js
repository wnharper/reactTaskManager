import Button from "./Button"
import { useState } from "react"

const AddTask = ({ addTask }) => {

    const [text, setText] = useState('')
    const [day, setday] = useState('')
    const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()
    
    if (!text) {
        alert('No task entered')
        return
    }

    addTask({text, day, reminder})
    setText('')
    setday('')
    setReminder(false)
}

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day and time</label>
            <input type='text' placeholder="Add day & time" value={day} onChange={(e) => setday(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set reminder</label>
            <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input className="btn btn-block" type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask