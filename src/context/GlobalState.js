import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  tasks: [
    { id: 1, text: 'Finish Math HW', deadline: {year: '2022', month: '06', day: '05'}, isComplete: false },
    { id: 2, text: 'Complete react todo list', deadline: {year: '2022', month: '07', day: '09'}, isComplete: false },
    { id: 3, text: 'Learn React', deadline: {year: '2022', month: '06', day: '05'}, isComplete: true },
    { id: 4, text: 'Apply to job', deadline: {year: '2022', month: '06', day: '23'}, isComplete: true },
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTask(id) {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    });
  }

  function addTask(task) {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    });
  }

  function changeTaskState(id) {
    dispatch({
      type: 'CHANGE_TASK_STATE',
      payload: id
    });
  }

  function sortByName() {
    dispatch({
      type: 'SORT_BY_NAME',
    });
  }
  
  function sortByDeadline() {
    dispatch({
      type: 'SORT_BY_DEADLINE',
    });
  }
  
  function filterDate(date) {
    dispatch({
      type: 'FILTER_DATE',
      payload: date
    });
  }

  function showComplete() {
    dispatch({
      type: 'SHOW_COMPLETE'
    })
  }
  function showIncomplete() {
    dispatch({
      type: 'SHOW_INCOMPLETE'
    })
  }
  function showTotal() {
    dispatch({
      type: 'SHOW_TOTAL'
    })
  }


  return (<GlobalContext.Provider value={{
    tasks: state.tasks,
    deleteTask,
    addTask,
    changeTaskState,
    sortByName,
    sortByDeadline,
    filterDate,
    showComplete,
    showIncomplete,
    showTotal
  }}>
    {children}
  </GlobalContext.Provider>);
};