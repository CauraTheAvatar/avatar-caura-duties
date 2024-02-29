import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import {ITask} from './interface.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TaskToDo from './TaskToDo.js';
import { makeAutoObservable } from 'mobx';
import firebase from 'firebase/app';
import 'firebase/firestore';



const App: FC = () => 
{

  const [task, setTask] = useState<string>("");
  const [duedate, setDueDate] = useState<number>(0);
  const [taskList, setTaskList] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => 
  {
    if (event.target.name === "task")
    {
      setTask(event.target.value)
    } else 
    {
      setDueDate(Number(event.target.value));
    }
  };

  //CRUD = Create
  const addTask = (): void => 
  {
    const newTask = {taskName: task, duedate: duedate};
    setTaskList([...taskList, newTask]);
    setTask("");
    setDueDate(0);
  }

  const completeTask = (taskNameToDelete: string): void => 
  {
    setTaskList(taskList.filter((task) => 
    {
      return task.taskName != taskNameToDelete
    }))
  }

  //To include CSS & Bootstrap Configs
  return (
  <div className='App'>

    <div className='header'>
      <div className='inputContainer'>
      <input type="text" placeholder='Task...' name="task" value={task} onChange={handleChange}/>
      <input type="number" placeholder='Due Date (in Days)...' name="duedate" value={duedate} onChange={handleChange}/>
      </div>
      <button>Add New Task</button>
    </div>


    <div className='taskList'>
      {taskList.map((task: ITask, key: number) => {
        return <TaskToDo key={key} task={task} completeTask={completeTask} />;
      })}
    </div>

    <div className='footer'>
      <div className='inputContainer'>
      <input type="text" placeholder='Task...' name="task" value={task} onChange={handleChange}/>
      <input type="number" placeholder='Due Date (in Days)...' name="duedate" value={duedate} onChange={handleChange}/>
      </div>
      <button>Add New Task</button>
    </div>


  </div>
  )
}

export default App;
