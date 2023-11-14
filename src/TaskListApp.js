import React, { useState } from 'react';
import TaskList from './TaskList';
// import TaskForm from './TaskForm';
import AddTask from './AddTask'; // Import the AddTask component
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library


function TaskListApp() {
  const [tasks, setTasks] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  
  const addTask = (newTask) => {
    const taskId = uuidv4(); // Use uuidv4 to generate a unique ID
    const task = { ...newTask, id: taskId };
    setTasks([...tasks, task]);
    setShowTaskForm(false);
  };
  

  const editTask = (editedTask) => {
    // Update the tasks state, modifying the specific task with the matching ID
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    // Update the tasks state, removing the specific task with the matching ID
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };


  return (
    <div className="app-container">
      <div className="left-panel">
        <h1>Task List</h1>
        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      </div>
      <div className="right-panel">
        <button className="add-task-button" onClick={() => setShowTaskForm(!showTaskForm)}>
          + Add Task
        </button>
        {showTaskForm && (
          <AddTask
            addTask={addTask}
            onCancel={() => setShowTaskForm(false)} // Close the form on cancel
          />
        )}
      </div>
    </div>
  );
}

export default TaskListApp;
