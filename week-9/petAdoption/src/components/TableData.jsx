import React from 'react'

const goBack = (setIsSubmitted) => {
  setIsSubmitted(false);
}

const TableData = ({ setIsSubmitted, entries }) => { //passing entries as props to use it here
  return (
    <>
      <div id="data-table">
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Adopter Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              //this is the callback function on each entry object where we use the index as the key to traverse it and for faster rendering
              <tr key={index}>
                <td>{entry.petName}</td>
                <td>{entry.petType}</td>
                <td>{entry.breed}</td>
                <td>{entry.userName}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="go-back">
        <button onClick={() => goBack(setIsSubmitted)}>Go back</button> 
        {/* this is done () => goBack(setIsSubmitted) so that goBack is only called when the button is clicked, rather than during rendering */}
      </div>
    </>
  );
}

export default TableData