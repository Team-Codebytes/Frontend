import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'


import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />

      
      </BrowserRouter>
    </div>
  );
}

export default App;
