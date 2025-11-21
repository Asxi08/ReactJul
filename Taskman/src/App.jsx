import React from 'react'
import TaskForm from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'
import { useState } from 'react'

export default function App() {
  const[tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(task);
  }
  return (
    <div>
      <header>
      <h1>Task Man</h1>
      <p><i>Your friendly task manager</i></p>
      </header>
      <TaskForm addTask = {addTask}/>
      <Tasklist/>
      <ProgressTracker/>
      <button>Clear all tasks</button>
    </div>
  )
}
