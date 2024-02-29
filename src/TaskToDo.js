import React from 'react';
import { ITask } from './interface';

const TaskToDo = ({ task, completeTask }) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.duedate}</span>
            </div>
            <button onClick={() => { completeTask(task.taskName) }}>Clear</button>
        </div>
    );
};

export default TaskToDo;
