import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect } from "react"
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])


  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }

  //Fetch Single Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }


  //Add Task
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

    const res = await fetch("http://localhost:5000/tasks", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }


  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async(id) => {
    const tastToToggle = await fetchTask(id)
    const updTask = {...tastToToggle, reminder: !tastToToggle.reminder}
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => 
      task.id === id ? 
      { ...task, reminder: data.reminder } : 
      task
      ))
    }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker" />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To show')}
    </div>
  );
}

export default App;
