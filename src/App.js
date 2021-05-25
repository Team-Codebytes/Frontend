import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchJobs from './pages/SearchJobs'


import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchJobs} />


      </BrowserRouter>
    </div>
  );
}

export default App;
