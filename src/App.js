import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import ProtectedRoute from './utils/ProtectedRoute'

import Home from './pages/Home'
import SearchJobs from './pages/SearchJobs'
import JobInfoForm from './pages/JobInfoForm'
import ChooseUser from './pages/ChooseUser'
import UserRegister from './pages/UserRegister'
import EnterpriseRegister from './pages/EnterpriseRegister'
import WorkerRegister from './pages/WorkerRegister'
import FindPeople from './pages/FindPeople'
import Explore from './pages/Explore'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/choose-user-type" component={ChooseUser} />
        <Route exact path="/user-register" component={UserRegister} />
        <Route exact path="/enterprise-register" component={EnterpriseRegister} />
        <Route exact path="/worker-register" component={WorkerRegister} />
                <Route exact path="/login" component={Login} />


        <Route exact path="/search-jobs">
          <ProtectedRoute comp={SearchJobs} />
        </Route>

        <Route exact path="/job-info-form">
          <ProtectedRoute comp={JobInfoForm} />
        </Route>

        <Route exact path="/find-people">
          <ProtectedRoute comp={FindPeople} />
        </Route>

        <Route exact path="/profile">
          <ProtectedRoute comp={UserProfile} />
        </Route>

        <Route exact path="/explore">
          <ProtectedRoute comp={Explore} />
        </Route>


      </BrowserRouter>
    </div>
  );
}

export default App;
