import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Task = ({ task }) => {
  const { deleteTask, changeTaskState } = useContext(GlobalContext);
  return (
    <li className={`task-li ${task.hidden ? 'hidden' : ''}`}>
      <button 
      className={`task flex-horizontal ${task.isComplete ? 'complete' : 'incomplete'}`}
      onClick={() => changeTaskState(task.id)}>
        <label htmlFor={task.id} className="task-name">{task.text}</label>
        <label htmlFor={task.id} className="deadline">
          {`${task.deadline.month}/${task.deadline.day}/${task.deadline.year}`}
        </label>
      </button>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        <i className="trash-btn fa fa-trash"></i>
      </button>
    </li>
  )
};

export default Task;