import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import Footer from './components/Footer';
import About from './About';



function App() {

  // states
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)

  // hooks
  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks()
      setTasks(data)
    }
    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // fetch single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  
  // add task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task) })

    const data = await res.json()
    setTasks(tasks.concat(data))
  }

  // delete task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTasks(tasks.filter(task => task.id !== id))
  }


  // toggle reminder
  const toggleReminder = async (id) => {
    console.log(id)
    const task = await fetchTask(id)
    const newTask = {...task, reminder: !task.reminder}
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    const data = await res.json()

    setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task))
  }


  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
       <Routes>
          <Route path='/' element= {
            <>
              {showAddTask && <AddTask addTask={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggle={toggleReminder}/> : 
              'No tasks to show'}
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
