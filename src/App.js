import React from 'react';
import { Modal } from 'react-bootstrap/Modal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import User from './pages/User';
import Quiz from './pages/Quiz';
// axios.defaults.baseURL = "http://localhost:8000/"; 

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/user" component={User} />
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
