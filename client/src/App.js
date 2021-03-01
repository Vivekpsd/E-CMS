import React, { useEffect } from 'react';
import Landing from './components/layouts/landing';
import Navbar from './components/layouts/navbar';
import Login from './components/auth/login';
import Register from './components/auth/register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import Profiles from './components/profiles/Profiles';
import Admin from './components/dashboard/Admin';
import Student from './components/dashboard/Student';
import Teacher from './components/dashboard/Teacher';
import Profile from './components/profile/Profile';
import Courses from './components/courses/Courses';
import Course from './components/course/Course';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layouts/Alert';
import Dashboard from './components/dashboard/Dashboard';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route path='/' exact component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profiles' component={Profiles} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/course/:id' component={Course} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/student' component={Student} />
            <Route exact path='/teacher' component={Teacher} />
            <Route exact path='/profile/:id' component={Profile} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={CreateProfile}
            />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
}
