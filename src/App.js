import { useState, useEffect } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState ()

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTask()
  } , [])

  
  // fetchTask
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // addTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([ ...tasks, newTask ])
  }

  // onDelete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle Riminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: ! task.reminder } : task))
  }

  return (
    <div className="container">
        <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder} />) : ('No task to show')}
    </div>
  )
}

export default App;
