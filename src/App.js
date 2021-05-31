import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchJobs from './pages/SearchJobs'
import SearchPeople from './pages/SearchPeople'
import JobInfoForm from './pages/JobInfoForm'
import ChooseUser from './pages/ChooseUser'
import UserRegister from './pages/UserRegister'
import EnterpriseRegister from './pages/EnterpriseRegister'
import WorkerRegister from './pages/WorkerRegister'
import FindPeople from './pages/FindPeople'









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
        <Route exact path="/user-register" component={UserRegister} />
        <Route exact path="/enterprise-register" component={EnterpriseRegister} />
        <Route exact path="/worker-register" component={WorkerRegister} />
        <Route exact path="/find-people" component={FindPeople} />







      </BrowserRouter>
    </div>
  );
}

export default App;
