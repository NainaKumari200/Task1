import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    progress: 'to-do',
    priority: 'low',
    status: 'todo',
  });

  const handleAddTask = () => {
    const taskId = Math.floor(Math.random() * 10000);
    const task = { ...newTask, id: taskId };
    addTask(task);
    setNewTask({
      title: '',
      description: '',
      progress: 'to-do',
      priority: 'low',
      status: 'todo',
    });
  };

  const handleStatusChange = (newStatus) => {
    setNewTask({ ...newTask, status: newStatus });
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <textarea
        placeholder="Task Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <select
        value={newTask.progress}
        onChange={(e) => setNewTask({ ...newTask, progress: e.target.value })}
      >
        <option value="to-do">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select
        value={newTask.priority}
        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <div className="status-buttons">
        <button
          className={`status-button ${newTask.status === 'todo' ? 'active' : ''}`}
          onClick={() => handleStatusChange('todo')}
        >
          To Do
        </button>
        <button
          className={`status-button ${newTask.status === 'in-progress' ? 'active' : ''}`}
          onClick={() => handleStatusChange('in-progress')}
        >
          In Progress
        </button>
        <button
          className={`status-button ${newTask.status === 'done' ? 'active' : ''}`}
          onClick={() => handleStatusChange('done')}
        >
          Done
        </button>
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
