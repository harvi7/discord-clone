import React from 'react';

import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
