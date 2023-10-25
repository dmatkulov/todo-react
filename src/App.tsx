import React, {useState} from 'react';
import Task from './AddTaskForm/Task.tsx';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm.tsx';


interface Task {
  id: string;
  task: string;
}
let id: number = 0;
const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {task: 'This is task number 1', id: `${id++}`},
    {task: 'This is task number 2', id: `${id++}`}
  ]);

  const [currentTask, setCurrentTask] = useState('');

  const getNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTask = event.target.value;
    setCurrentTask(newTask);
  };

  const addNewTask = () => {
    if (currentTask !== '') {
      const tasksCopy = [...tasks];
      const newTask = [...tasksCopy, {task: currentTask, id: `${id++}`}];
      setTasks(newTask);
      setCurrentTask('');
    }
  };

  const removeTask = (taskId: string) => {
    const updateTaskList = tasks.filter((task) => task.id !== taskId);
    setTasks(updateTaskList);
  };

  return (
    <div className="app">
      <AddTaskForm
        task={currentTask}
        onNewTask={(event) => getNewTask(event)}
        onAddTask={addNewTask}
      />
      <div className="task-wrapper">
        {tasks.map((task) => (
          <Task key={task.id} task={task.task} onRemove={() => removeTask(task.id)}/>
        ))}
      </div>
    </div>
  );
};

export default App;
