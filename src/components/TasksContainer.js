import React from 'react'
import FilterBar from './FilterBar';
import TaskList from './TaskList';

const TasksContainer = () => {
  return (
    <div className="tasks-container container flex-vertical">
      <h3>- your tasks -</h3>
      <FilterBar />
      <TaskList />
    </div>
  )
}

export default TasksContainer