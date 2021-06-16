import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';

function App() {
    return (
      <div>
        <Router>
            <Switch>
                <Route
                    exact path="/"
                    render={() => (
                        <MainPage/>
                    )}
                />
            </Switch>
        </Router>
      </div>
    );
  }

export default App;
