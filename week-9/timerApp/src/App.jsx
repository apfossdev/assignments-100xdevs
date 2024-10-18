import { useState } from 'react'
import './App.css'
import EditingState from './components/EditingState';
import RunningState from './components/RunningState';

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [editState, setEditState] = useState(true); //this is required to shift between states
  const [isRunning, setIsRunning] = useState(false); //this is required for pausing the timer

  return (
    <div className="app-container">
      <div>
        {editState ? (
          <EditingState
            setEditState={setEditState}
            time={time}
            setTime={setTime}
            setIsRunning={setIsRunning}
          />
        ) : (
          <RunningState
            setEditState={setEditState}
            time={time}
            setTime={setTime}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
          />
        )}
      </div>
    </div>
  );
}

export default App
