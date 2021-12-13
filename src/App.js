import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"


const App = () => {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 2nd At 1:30pm",
        reminder: true
      },
      {
        id: 2,
        text: "Business meeting",
        day: "April 24th At 4:30pm",
        reminder: false
      },
      {
        id: 3,
        text: "Date with wife",
        day: "May 14th At 8:30pm",
        reminder: true
      }
    ])

    //Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) =>
{
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To show')}
    </div>
  );
}

export default App;
