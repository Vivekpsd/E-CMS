import React from 'react';
import Landing from './components/layouts/landing';
import Navbar from './components/layouts/navbar';
import Login from './components/layouts/Login/login';
import Register from './components/layouts/Register/register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layouts/Alert';

export default function App() {
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
          </Switch>
        </section>
      </Router>
    </Provider>
  );
}
