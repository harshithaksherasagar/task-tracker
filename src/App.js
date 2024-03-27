import React, { useState, useEffect } from 'react';
import TaskList from 'C:/Users/HARSHITHA/new visual studio code projects/task tracker/task-tracker/src/task_List.js';
import AddTaskForm from 'C:/Users/HARSHITHA/new visual studio code projects/task tracker/task-tracker/src/AddTaskForm.js';
import './App.css';
function App() {
  // Initialize tasks state with tasks from localStorage or empty array
  const [tasks, setTasks] = useState(() => getTasksFromLocalStorage());

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

// Save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Retrieve tasks from local storage
const getTasksFromLocalStorage = () => {
  const tasksJSON = localStorage.getItem('tasks');
  return tasksJSON ? JSON.parse(tasksJSON) : [];
};

export default App;
