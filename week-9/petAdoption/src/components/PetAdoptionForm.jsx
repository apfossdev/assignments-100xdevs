import React, { useState } from 'react'
import { z } from 'zod'

const PetAdoptionForm = ({ setEntries, setIsSubmitted }) => {
  //set up state variable to handle form input values
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    breed: "",
    userName: "",
    email: "",
    phone: "",
  });

  // Define the validation schema

  const [errors, setErrors] = useState({});

  const formSchema = z.object({
    petName: z
      .string()
      .min(3, { message: "Pet name must be at least 3 characters long" }),
    petType: z.string().min(1, { message: "Please select a pet type" }),
    breed: z
      .string()
      .min(3, { message: "Breed must be at least 3 characters long" }),
    userName: z
      .string()
      .min(3, { message: "Your name must be at least 3 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
      .string()
      .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
  });
  

  //handle input changes and update the state variable formData
  const handleChange = (e) => {
    //here e is the event object (here the event would be onChange) that contains info about the event that triggered this function
    const { name, value } = e.target; //we use the destructuring syntax here to store name = e.target.name and value = e.target.value, e.target is the element that triggered the event
    // Get the target element
    // const target = e.target; // The element that triggered the event
    // const name = target.name; // Access the name attribute
    // const value = target.value; // Access the value attribute

    setFormData({
      ...formData, //spread operator used to take existing formData and spread all its current values into a new object before updating the change
      [name]: value, //here we update the petName or petType or breed and etc. based on the key received in the event object to the value received in the event object as well along with keeping the previous remaining values using the spread operator and we only update what we need to update here
    });

    // this is how the spread operator works
    // setFormData({
    //   petName: formData.petName, // Assuming petName is one of the fields
    //   petType: formData.petType, // Assuming petType is another field
    //   breed: formData.breed, // Assuming breed is another field
    //   userName: formData.userName, // Assuming userName is another field
    //   email: formData.email, // Assuming email is another field
    //   phone: formData.phone, // Assuming phone is another field
    //   [name]: value, // Dynamically update the field based on name
    // });

    // console.log(formData); //i think they get fucked up because of react dom, let's see; yeah looks like it

    // Validate the specific field in real-time
    try {
      formSchema.pick({ [name]: true }).parse({ [name]: value });
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null, // Clear the error for the specific field
      }));
    } catch (err) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: err.errors[0].message, // Set the error message for the field
      }));
    }   
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behaviour

    try{
      formSchema.parse(formData);
      setErrors({}); //Clear errors if validation parses

      setEntries((prevEntries) => [...prevEntries, formData]); //this is the syntax here prevEntries is replaced by ...prevEntries(just a way to represent them) + formData, in the end is replaced by prevEntries + formData
      // setEntries((prevEntries) => {
      //   const newEntries = [...prevEntries, formData];
      //   console.log('new entries', newEntries);
      //   return newEntries;
      // })
      // syntax for checking logs inside itself without issues

      console.log("Form submitted with data:", formData); //Log form data
      // console.log('Entries array:', entries ); always log inside the setter function itself, like above else it won't work

      //set submission flag to true
      setIsSubmitted(true);
      console.log("Form submitted, switching to TableData view");

      // reset the form after submit
      setFormData({
        petName: "",
        petType: "",
        breed: "",
        userName: "",
        email: "",
        phone: "",
    });
    }

    catch (err) {
      // Capture validation errors and display them
      const fieldErrors = err.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(fieldErrors);
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {/* here we use htmlFor with the same input name below for screen reader
        accessibility */}
        <label htmlFor="petName">Pet Name</label>
        <input
          type="text"
          name="petName"
          value={formData.petName}
          onChange={handleChange}
          placeholder="Pet Name"
        />
        {errors.petName ? <p className="error">{errors.petName}</p> : null}
      </div>
      <div className="form-group">
        <label htmlFor="petType">Choose an option:</label>
        <select name="petType" value={formData.petType} onChange={handleChange}>
          <option value="" disabled>
            Select an option
          </option>{" "}
          {/* Default placeholder option */}
          <option value="Dogs">Dogs</option>
          <option value="Cats">Cats</option>
          <option value="Rabbits">Rabbits</option>
          <option value="Guinea Pigs">Guinea Pigs</option>
          <option value="Birds">Birds</option>
          <option value="Ferrets">Ferrets</option>
          <option value="Hamsters">Hamsters</option>
          <option value="Reptiles">Reptiles</option>
          <option value="Fish">Fish</option>
          <option value="Chinchillas">Chinchillas</option>
          <option value="Turtles">Turtles</option>
          <option value="Lizards">Lizards</option>
          <option value="Snakes">Snakes</option>
          <option value="Small Mammals">Small Mammals</option>
        </select>
        {errors.petType ? <p className="error">{errors.petType}</p> : null}
      </div>
      <div className="form-group">
        {/* here we use htmlFor with the same input name below for screen reader
        accessibility */}
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          placeholder="Breed"
        />
        {errors.breed ? <p className="error">{errors.breed}</p> : null}
      </div>
      <div className="form-group">
        {/* here we use htmlFor with the same input name below for screen reader
        accessibility */}
        <label htmlFor="userName">Your Name</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Your Name"
        />
        {errors.userName ? <p className="error">{errors.userName}</p> : null}
      </div>
      <div className="form-group">
        {/* here we use htmlFor with the same input name below for screen reader
        accessibility */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email ? <p className="error">{errors.email}</p> : null}
      </div>
      <div className="form-group">
        {/* here we use htmlFor with the same input name below for screen reader
        accessibility */}
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {errors.phone ? <p className="error">{errors.phone}</p> : null}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default PetAdoptionForm