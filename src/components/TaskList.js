import React, { useContext } from 'react'
import Task from './Task'
import { GlobalContext } from '../context/GlobalState';

const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task 
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  )
}

export default TaskList