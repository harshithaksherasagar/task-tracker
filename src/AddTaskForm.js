// AddTaskForm.js
import React, { useState } from 'react';
import './AddTaskForm.css'

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title,
      description,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    
    <form onSubmit={handleSubmit} id='form'>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;


