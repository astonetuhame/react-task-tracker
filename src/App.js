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
    ]
  )
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
