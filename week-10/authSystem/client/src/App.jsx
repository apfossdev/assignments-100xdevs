import { useState } from "react"
import AppBar from '../components/AppBar'
import Home from '../components/Home'
import Login from '../components/Login'

function App() {
  
  const [authState, setAuthState] = useState({
    username : '',
    isLoggedIn: false
  });

  return (
    <>
    
      <AppBar authState={authState} setAuthState={setAuthState}/>
      {authState.isLoggedIn ? (<Home />) : (<Login setAuthState={setAuthState} />)}
    </>
  )
}

export default App
