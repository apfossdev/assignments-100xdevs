import React, { useState, useEffect } from "react";
import './RunningState.css'

const RunningState = ({ setEditState, time, setTime, isRunning, setIsRunning }) => {

  //the countdown timer must begin once the RunningState is rendered on the screen
  useEffect(() => {
    let interval = null; //declare it outside the if block as then it will be accessible in the else block as well
    //start the countdown interval when the component mounts
    //Mounting refers to the process of creating a component and inserting it into the DOM (the web page structure).
    if (isRunning) {
      interval = setInterval(() => {
        //Decrease time logic here as each second passes
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime; //destructuring syntax here

          //Decrease the seconds first
          if (seconds > 0) {
            seconds -= 1;
          } else if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          }

          return { hours, minutes, seconds }; //here we return the new values to replace the prevTime object with
        });
      }, 1000); //runs every 1s
    } else if (
      !isRunning &&
      time.hours === 0 &&
      time.minutes === 0 &&
      time.seconds === 0
    ) {
        //if the time is up as in the conditions just above, then clear the interval as well similar to the cleanup function below for the useEffect
        clearInterval(interval); //here we use clearInterval by passing in the id of the setInterval to stop it, the id is named as interval above
    }
    // Cleanup function to clear the interval when the component unmounts or stops
    // Unmounting happens when a component is removed from the DOM.
    // we use a CLEANUP FUNCTION ALWAYS IN useEffect to avoid unexpected behaviours and prevent memory leaks
    return () => clearInterval(interval); //When the RunningState component is unmounted,
  }, [isRunning]); //the empty dependency array ensures the effect runs only when the component is mounted //but here we place isRunning here and see below for explanation
  //if there is any element inside the dependency array, then it is run on mount and whenever the variable changes again and again
  //now as we make a change to isRunning state in editingState it is immediately reflected and the useEffect here starts running as it is in the dependency array

  const handleTimerClicks = () => {
    //need to pass the present running time to the editing state -> this is automatically done, thanks to React :)
    //and need to switch to EditingState here
    setEditState(true);
  };

  const handleReset = () => {
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    //and all the h4s should show 0 0 0
    setIsRunning(false); //here reset the timer as above and stop it from running
  };

  const handlePause = () => {
    //here need to pause the useEffect of the timer
    setIsRunning(false); //we use this flag for that
  };

  const handleResume = () => {
    setIsRunning(true); //Start the timer
    setEditState(false); //Switch to RunningState
  }

  return (
    <>
      {/* we should get this value as props from App and use the state variable here */}
      <div className="timer-displays">
        <h4 onClick={handleTimerClicks}>{time.hours}:</h4>
        <h4 onClick={handleTimerClicks}>{time.minutes}:</h4>
        <h4 onClick={handleTimerClicks}>{time.seconds}</h4>
      </div>
      <div className="timer-buttons">
        <div>
          <button onClick={handlePause}>Pause</button>
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div>
          <button onClick={handleResume}>Resume</button>
        </div>
      </div>
    </>
  );
};

export default RunningState;
