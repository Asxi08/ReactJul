import React from 'react'
import TaskForm from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);

  }

  const deleteTask = () => {

  }
  return (
    <div>
      <header>
      <h1>Task Man</h1>
      <p><i>Your friendly task manager</i></p>
      </header>
      <TaskForm addTask = {addTask}/>
      <Tasklist tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <ProgressTracker/>
      <button>Clear all tasks</button>
    </div>
  )
}
