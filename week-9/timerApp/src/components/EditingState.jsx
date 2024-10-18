import React, { useState } from 'react'
import './EditingState.css'
import { z } from "zod";

const EditingState = ({
  setEditState,
  time,
  setTime,
  setIsRunning
}) => {

  //Define the validation schema
  
  const [errors, setErrors] = useState({}); //for real time input validation
  
  //max for STRINGS CHECKS LENGTH, FOR NUMBER VALUES CHECKS VALUE
  const formSchema = z.object({
    hours: z.number().max(99, { message: "Enter only upto 2 digits for hours" }),
    minutes: z.number().max(59, { message: "Enter below 59 minutes" }),
    seconds: z.number().max(59, { message: "Enter below 59 seconds" })
  });


  const handleReset = () => {
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  // function to update the time state if any change occurs on the inputs below
  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericValue = Number(value);
    //convert the value into a numeric value for the zod library to parse it correctly
    setTime({
      ...time,
      [name]: numericValue
    });

    // or we can use this syntax
    // setTime((prevTime) => ({
    //     ...prevTime,
    //     [name]: value
    // }))

    //Validate the inputs in real time in this handleChange function
    try {
      formSchema.pick({ [name]: true }).parse({ [name]: numericValue }); //here too change it to numericValue as done here
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null, //clear the error for the specific field as it passed successfully
      }));
    } catch (err) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: err.errors[0].message, //set the error message for the specific field as it failed
      }));
    }
  };

  const handleStart = () => {

    //check for errors before starting the timer
    try{
        formSchema.parse(time);
        setErrors({}); //clear all errors in the array of objects
        //need to change the state to running
        setEditState(false);
        setIsRunning(true);
    }catch(err){
        const fieldErrors = {}; // an empty object to hold field: error message pairs
        err.errors.forEach((error) => {
            fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors); //update the error state
    }


  };

  return (
    <>
      {/* we should get this value as props from App and use the state variable here */}
      <div className="timer-inputs">
        <input
          type="text"
          id="hours"
          name="hours"
          onChange={handleChange}
          value={time.hours}
        />
        :
        <input
          type="text"
          id="minutes"
          name="minutes"
          onChange={handleChange}
          value={time.minutes}
        />
        :
        <input
          type="text"
          id="seconds"
          name="seconds"
          onChange={handleChange}
          value={time.seconds}
        />
      </div>
      <div className="input-validation-errors">
        {errors.hours ? <p className="error">{errors.hours}</p> : null}
        <br />
        {errors.minutes ? <p className="error">{errors.minutes}</p> : null}
        <br />
        {errors.seconds ? <p className="error">{errors.seconds}</p> : null}
      </div>
      <div className="timer-buttons">
        <div>
          <button onClick={handleStart}>Start</button>
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default EditingState

