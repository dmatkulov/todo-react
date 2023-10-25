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
    const index = tasks.findIndex((task) => task.id === taskId);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  let taskList: React.ReactNode = null;

  if (tasks.length > 0) {
    taskList = tasks.map((task) => {
      return (
        <Task key={task.id} task={task.task} onRemove={() => removeTask(task.id)}/>
      );
    });
  } else {
    taskList = (
      <div className="empty-list">
        <p>Task list is empty</p>
        <p>Add new task</p>
      </div>
    );
  }

  return (
    <div className="app">
      <div>
        <AddTaskForm
          task={currentTask}
          onNewTask={(event) => getNewTask(event)}
          onAddTask={addNewTask}
        />
      </div>
      <div className="task-wrapper">
        {taskList}
      </div>
    </div>
  );
};

export default App;
