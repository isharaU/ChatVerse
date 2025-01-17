import React from 'react';
import {Route}  from 'react-router-dom';
import Homepage from './Pages/Homepage';

const App = () => {
  return (
    <div className='App'>
      <Route path="/" Component={Homepage}/>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
