import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

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
                <Route
                    exact path="/about"
                    render={() => (
                        <AboutPage/>
                    )}
                />
                <Redirect from="*" to="/"/>
            </Switch>
        </Router>
      </div>
    );
  }

export default App;
