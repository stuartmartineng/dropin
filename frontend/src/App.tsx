import React from 'react';
import Home from './components/home/home'

import { Router, Route } from 'react-router-dom';
import {Login} from './components/login/login'

import {history} from './helpers/history'

import {PrivateRoute} from './components/privateRoute/privateRoute'

import './App.css';
import './styles/styles.css';
import './styles/animations.css';
import {DropinNavbar} from './components/home/navbar';

import { Provider } from 'react-redux';
import {store, persistor} from './store/store'
import { Register } from './components/login/register';

import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>

            <DropinNavbar></DropinNavbar>
              <Router history={history}>
                <div>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
              </Router>
          </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
