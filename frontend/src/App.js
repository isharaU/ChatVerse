import React from 'react';
import {Route}  from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';

const App = () => {
  return (
    <div className='App'>
      <Route path="/" Component={Homepage} exact />
      <Route path="/chats" Component={Chatpage}/>
    </div>
  );
}

export default App;
