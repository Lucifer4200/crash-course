import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
    const [tasks, setTask] = useState([
      {
          id : 1,
          text : 'Doctors Appiontment',
          day : 'Fed 5th at 2:30 pm',
          reminder : true, 
      },
      {
          id : 2,
          text : 'Metting at school',
          day : 'Fed 6th at 1:30 pm',
          reminder : true, 
      },
      {
          id : 3,
          text : 'Food Shopping',
          day : 'Fed 5th at 2:30 pm',
          reminder : false, 
      }
  ])

  // onDelete
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  // toggle Riminder
  const toggleReminder = (id) => {
    console.log (id)
  }

  return (
    <div className="container">
        <Header />
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder} />
    </div>
  )
}

export default App;
