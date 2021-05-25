import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
