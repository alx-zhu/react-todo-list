import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const TaskCounts = () => {
  const { tasks, showComplete, showIncomplete, showTotal } = useContext(GlobalContext);

  const isCompletedList = tasks.map(task => task.isComplete);
  const total = isCompletedList.length;
  const complete = isCompletedList.filter(isComplete => isComplete).length;
  const incomplete = isCompletedList.filter(isComplete => !isComplete).length;
  

  return (
    <div className="task-count-container container flex-horizontal">
      <button className="filter-btn filter-complete count-container flex-vertical" onClick={() => showComplete()}>
        <h3>complete</h3>
        <h2 className="complete-count">{complete}</h2>
      </button>
      <button className="filter-btn filter-incomplete count-container flex-vertical" onClick={() => showIncomplete()}>
        <h3>incomplete</h3>
        <h2 className="incomplete-count">{incomplete}</h2>
      </button>
      <button className="filter-btn filter-total count-container flex-vertical" onClick={() => showTotal()}>
        <h3>total</h3>
        <h2 className="total-count">{total}</h2>
      </button>
    </div>
  )
}

export default TaskCounts;