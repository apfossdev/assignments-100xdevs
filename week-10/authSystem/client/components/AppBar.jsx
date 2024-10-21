import React, { useState } from 'react'

const AppBar = ({ authState, setAuthState }) => {

    const handleLogout = () => {
        setAuthState({
            username: '',
            isLoggedIn: false
        });
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