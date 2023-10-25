import React from 'react';

interface Props {
  task: string;
  onNewTask: React.ChangeEventHandler<HTMLInputElement>;
  onAddTask: React.MouseEventHandler;
}
const AddTaskForm: React.FC<Props> = ({task, onNewTask, onAddTask}) => {
  return (
    <div className='add-form'>
      <input
        className="input"
        value={task}
        onChange={onNewTask}
        placeholder="Add new task"
      />
      <button
        className="btn-add"
        onClick={onAddTask}>Add task</button>
    </div>
  );
};


export default AddTaskForm;
