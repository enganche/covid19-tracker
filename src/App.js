import React from 'react';
import GenerateDay from './components/calendar';
import Display from './components/display';

function App() {  

  return (
    <div className="app" align="center">
      <h1>Bạn đang xem: Việt Nam</h1>
      <GenerateDay />
      <Display />
      <h2>Việt Nam quyết thắng đại dịch!</h2>
    </div>
  );
}

export default App;
