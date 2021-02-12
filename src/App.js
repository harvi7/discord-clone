import React from 'react';
import { useSelector } from 'react-redux'

import './App.css'
import Chat from './components/Chat/Chat'
import Sidebar from './Sidebar'
import { selectUser } from './features/userSlice'
import Login from './components/Auth/Login';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
