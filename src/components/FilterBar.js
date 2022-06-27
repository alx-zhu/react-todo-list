import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const FilterBar = () => {
  const [date, setDate] = useState('yyyy-mm-dd');
  const { sortByName, sortByDeadline, filterDate } = useContext(GlobalContext);

  const handleClick = e => {
    setDate('');
    filterDate(date);
  }

  return (
    <div className="filter-bar flex-horizontal">
      <div className="sort-items">
        sort by: 
        <button className="filter-btn filter-name" onClick={() => sortByName()}>name</button>
        <button className="filter-btn filter-deadline" onClick={() => sortByDeadline()}>deadline</button>
      </div>
      <div className="filter-items">
        <input type="date" className="filter-date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button className="filter-btn filter-date-btn" onClick={handleClick}>filter</button>
      </div>
    </div>
  )
}

export default FilterBar