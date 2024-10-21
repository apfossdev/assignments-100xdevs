import { useContext, useState } from "react"
import AppBar from '../components/AppBar'
import Home from '../components/Home'
import Login from '../components/Login'
import { AuthContext, AuthProvider } from '../context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  )
}

const Main = () => {

  const { authState } = useContext(AuthContext); //We do this here in MAIN as we directly can't do this in App function

  return (
    <>
      <AppBar/>
      {authState.isLoggedIn ? <Home /> : <Login />}
    </>
  );
}

export default App
