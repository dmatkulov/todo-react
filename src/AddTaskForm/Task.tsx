import React from 'react';
interface Props {
  task: string;
  onRemove: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({task, onRemove}) => {
  return (
    <div className="task-item">
      <p className="task-text">{task}</p>
      <button
        className="btn-remove"
        onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Task;