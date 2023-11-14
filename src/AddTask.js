import React, { useState } from 'react';

const AddTask = ({ addTask, onCancel }) => {
  const [newTask, setNewTask] = useState({
    description: '',
    priority: 'low', // Set the default priority
  });

  const handleDescriptionChange = (e) => {
    setNewTask({ ...newTask, description: e.target.value });
  };

  const handlePriorityChange = (priority) => {
    setNewTask({ ...newTask, priority });
  };

  const handleAddTask = () => {
    addTask(newTask);
    onCancel();
  };

  return (
    <div className="edit-confirmation">
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header x">
            <h2 className="modal-title y">Add Task</h2>
            <div className="close-icon close" onClick={onCancel}>
              &#x2716; {/* Close icon */}
            </div>
          </div>
          <div className="modal-body">
            <label>Task</label>
            <input
              type="text"
              value={newTask.description}
              onChange={handleDescriptionChange}
            />
            <div><label>Priority</label></div>
            <div className="priority-buttons">
              <button
                className={`priority-button ${newTask.priority === 'high' ? 'high' : ''}`}
                onClick={() => handlePriorityChange('high')}
              >
                High
              </button>
              <button
                className={`priority-button ${newTask.priority === 'medium' ? 'medium' : ''}`}
                onClick={() => handlePriorityChange('medium')}
              >
                Medium
              </button>
              <button
                className={`priority-button ${newTask.priority === 'low' ? 'low' : ''}`}
                onClick={() => handlePriorityChange('low')}
              >
                Low
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={handleAddTask} className="save-button">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
