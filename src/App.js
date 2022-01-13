import React from 'react';
import GenerateDay from './components/calendar';
import Display from './components/display';
import './App.css';

function App() {  

  return (
    <div className="app" align="center">
      <h1>Bạn đang xem: Việt Nam</h1>
      <GenerateDay />
      <Display />
    </div>
  );
}

export default App;
