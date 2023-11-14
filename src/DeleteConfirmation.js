import React from 'react';

const DeleteConfirmation = ({ onDelete, onCancel }) => {
  const handleDelete = () => {
    // Call the onDelete function to delete the item
    onDelete();
  };

  const handleCancel = () => {
    // Call the onCancel function to close the modal
    onCancel();
  };

  return (
    <div className="delete-confirmations">
      <div className="modals">
        <div className="modal-contents">
          <div className="modal-headers">
            <h2 className="modal-titles">Are you sure you want to<br/> delete this task?</h2>
          </div>
          <div className="modal-footers">
            
          <button onClick={handleDelete} className="delete-buttons">
              Delete
            </button>

            <button onClick={handleCancel} className="cancel-buttons">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
