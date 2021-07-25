import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import { CustomerPage } from './pages/CustomerPage';
import VisitPage from './pages/VisitPage';
import ScrollToTop from './parts/ScrollToTop';
import StatutePage from './pages/StatutePage';
import PolicyPage from './pages/PolicyPage';

function App() {
    return (
      <div style={{overflowX: "hidden"}}>
        <Router>
            <ScrollToTop>
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
                        path="/statute"
                        render={() => (
                            <CustomerPage>
                                <StatutePage/>
                            </CustomerPage>
                        )}
                    />
                    <Route
                        path="/policy"
                        render={() => (
                            <CustomerPage>
                                <PolicyPage/>
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
            </ScrollToTop>
        </Router>
      </div>
    );
  }

export default App;
