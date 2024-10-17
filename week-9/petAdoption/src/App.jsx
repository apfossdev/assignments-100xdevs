import './App.css';
import Header from './components/Header';
import PetAdoptionForm from './components/PetAdoptionForm';
import TableData from './components/TableData';
import { useState } from 'react';

function App() {
  const [entries, setEntries] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track form submission

  console.log("isSubmitted state:", isSubmitted);
  
  return (
    <div className="app-container">
      <Header />
      {!isSubmitted?(<PetAdoptionForm setIsSubmitted={setIsSubmitted} setEntries={setEntries}/>):(<TableData setIsSubmitted={setIsSubmitted} entries={entries}/>)}
    </div>
  );

  
}

export default App;
