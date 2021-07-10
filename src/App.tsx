import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import { CustomerPage } from './pages/CustomerPage';
import VisitPage from './pages/VisitPage';

function App() {
    return (
      <div>
        <Router>
            <Switch>
                <Route
                    exact path="/"
                    render={() => (
                        <CustomerPage>
                            <MainPage/>
                        </CustomerPage>
                    )}
                />
                <Route
                    exact path="/about"
                    render={() => (
                        <CustomerPage>
                            <AboutPage/>
                        </CustomerPage>
                    )}
                />
                <Route
                    exact path="/admin"
                    render={() => (
                        <AdminPage/>
                    )}
                />
                <Route
                    path="/login"
                    render={() => (
                        <CustomerPage>
                            <LoginPage/>
                        </CustomerPage>
                    )}
                />
                <Route
                    exact path="/visit"
                    render={() => (
                        <CustomerPage>
                            <VisitPage/>
                        </CustomerPage>
                    )}
                />
                <Redirect from="*" to="/"/>
            </Switch>
        </Router>
      </div>
    );
  }

export default App;
