import React from 'react';
import Home from './components/home/home'

import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {Login} from './components/login/login'

import {history} from './helpers/history'

import {PrivateRoute} from './components/privateRoute/privateRoute'

import './App.css';
import './styles/styles.css';
import {Navbar} from './components/home/navbar';

import { Provider } from 'react-redux';
import {store, persistor} from './store/store'
import { Register } from './components/login/register';

import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

            <Navbar></Navbar>
            <div className="container">
              <Router history={history}>
                <div>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
              </Router>
            </div>
          </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
