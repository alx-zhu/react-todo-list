import './App.css';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import AddTasks from './components/AddTasks';
import TaskCounts from './components/TaskCounts';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Header />
        <TaskCounts />
        <TasksContainer />
        <AddTasks />
      </div>
    </GlobalProvider>
  );
}

export default App;
