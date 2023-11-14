import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
// Import the circle icon from the regular style
import EditConfirmation from './EditConfirmation';
import DeleteConfirmation from './DeleteConfirmation'

function TaskItem({ task, editTask, deleteTask }) {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [status, setStatus] = useState('to-do'); // Default status
  const handleEditIconClick = () => {
    setShowEditConfirmation(true);
  };
  
  const handleDeleteIconClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleStatusChange = () => {
    // Toggle between 'to-do', 'in-progress', and 'done' statuses
    const newStatus =
      status === 'to-do' ? 'in-progress' : status === 'in-progress' ? 'done' : 'to-do';
    setStatus(newStatus);
  };

  const renderSpinner = () => {
    switch (status) {
      case 'to-do':
        return <div className="spinner empty-spinner"></div>;
      case 'in-progress':
        return <div className="spinner half-spinner"></div>;
      case 'done':
        return <div className="spinner full-spinner"></div>;
      default:
        return null;
    }
  };

  return (
    <div className="task-item">
      <div className="task-details ">
      <div className="abc">  
      <div className="grey">task{task.title}</div>
        <p>{task.description}</p> {/* Add this line to display the description */}
        </div>
        <div className="abcd"> 
        <div className={`priority-label grey`}>Priority</div>
  <div className={`priority priority-${task.priority}`}>{task.priority}</div>

      </div></div>
      <div className={`status status-${status}`} onClick={handleStatusChange}>
          {status}
        </div>
      <div className="process-status">
      {renderSpinner()}

      </div>

      <div className="edit">
        <FontAwesomeIcon icon={faEdit} onClick={handleEditIconClick} />
      </div>
  
      { (
  <div className="del" onClick={handleDeleteIconClick}>
    <FontAwesomeIcon icon={faTrash} style={{ color: '#ed0713' }} />
  </div>
)}

{showEditConfirmation && (
  <EditConfirmation
    task={task}
    onSave={(editedTask) => {
      editTask(editedTask); // Pass the edited task to editTask function
      setShowEditConfirmation(false);
    }}
    onClose={() => setShowEditConfirmation(false)}
  />
)}

{showDeleteConfirmation && (
  <DeleteConfirmation
    onDelete={() => {
      deleteTask(task.id); // Pass the task ID to deleteTask function
      setShowDeleteConfirmation(false);
    }}
    onCancel={() => setShowDeleteConfirmation(false)}
  />
)}
   
    </div>
  );
}

export default TaskItem;
