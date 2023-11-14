// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={(editedTask) => editTask(editedTask)}
          deleteTask={(taskId) => deleteTask(taskId)}
        />
      ))}
    </div>
  );
};

export default TaskList;
