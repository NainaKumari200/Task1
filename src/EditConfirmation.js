import React, { useState } from 'react';
const EditConfirmation = ({ task, onSave, onClose }) => {
    const [editedTask, setEditedTask] = useState({ ...task });
  
    const handleDescriptionChange = (e) => {
      const updatedTask = { ...editedTask, description: e.target.value };
      setEditedTask(updatedTask);
    };
  
  const handlePriorityChange = (priority) => {
    setEditedTask({ ...editedTask, priority });
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div className="edit-confirmation">
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header x">
            <h2 className="modal-title y">Edit Task</h2>
            <div className="close-icon close" onClick={onClose}>
              &#x2716; {/* This is the cross sign (×) */}
            </div>
          </div>
          <div className="modal-body">
            <label>Task</label>
            <input
              type="text"
              value={editedTask.description}
              onChange={handleDescriptionChange}
            />
            <label>Priority</label>
            <div className="priority-buttons">
              <button
                className={`priority-button ${editedTask.priority === 'high' ? 'high' : ''}`}
                onClick={() => handlePriorityChange('high')}
              >
                High
              </button>
              <button
                className={`priority-button ${editedTask.priority === 'medium' ? 'medium' : ''}`}
                onClick={() => handlePriorityChange('medium')}
              >
                Medium
              </button>
              <button
                className={`priority-button ${editedTask.priority === 'low' ? 'low' : ''}`}
                onClick={() => handlePriorityChange('low')}
              >
                Low
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={handleSave} className="save-button">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditConfirmation;
