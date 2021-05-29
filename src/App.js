import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchJobs from './pages/SearchJobs'
import SearchPeople from './pages/SearchPeople'
import JobInfoForm from './pages/JobInfoForm'
import ChooseUser from './pages/ChooseUser'






const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/search-jobs" component={SearchJobs} />
        <Route exact path="/search-people" component={SearchPeople} />
        <Route exact path="/job-info-form" component={JobInfoForm} />
         <Route exact path="/choose-user-type" component={ChooseUser} />





      </BrowserRouter>
    </div>
  );
}

export default App;
