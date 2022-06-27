import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTasks = () => {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');

  const { addTask } = useContext(GlobalContext);

  const handleSubmit = e => {
    e.preventDefault();
    const deadlineValue = deadline.split('-');
    const newTask = {
      id: Date.now().toString(),
      text,
      deadline: {
        year: deadlineValue[0],
        month: deadlineValue[1],
        day: deadlineValue[2]
      },
      isComplete: false,
      hidden: false
    }
    setText('');
    setDeadline('');
    addTask(newTask);
  }

  return (
    <div className="add-task-container container">
      <h3>- add new task -</h3>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-control flex-vertical">
          <label htmlFor="text">task name</label>
          <input className="text-input" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="enter task name..." required />
        </div>
        <div className="form-control flex-vertical">
          <label htmlFor="text">deadline</label>
          <input className="date-input" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
        </div>
        <button className="add-task-btn">add task</button>
      </form>
    </div>
  );
}

export default AddTasks;