import React, { useContext, useState } from 'react'
import { AuthContext } from "../context/AuthContext"; //import only context here not the provider too like in app

const AppBar = () => {

    const { logout, authState } = useContext(AuthContext);

    const handleLogout = () => {
      // setAuthState({
      //   username: "",
      //   isLoggedIn: false,
      // });
      //not required, this logic is already defined in the context api
      logout();
    }

    

    return (
      <div>
        <h1>
          auth system demo app bar{" "}
          {authState.username && <p>Hi {authState.username}!</p>}
        </h1>
        {authState.isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : null}
      </div>
    );
}

export default AppBar