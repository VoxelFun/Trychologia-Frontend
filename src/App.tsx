import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import { CustomerPage } from './pages/CustomerPage';
import VisitPage from './pages/VisitPage';
import ScrollToTop from './parts/ScrollToTop';
import PolicyPage from './pages/PolicyPage';
import TreatmentPage from './pages/TreatmentPage';
import BlogPage from './pages/BlogPage';

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
                        exact path="/gabinet"
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
                        path="/policy"
                        render={() => (
                            <CustomerPage>
                                <PolicyPage/>
                            </CustomerPage>
                        )}
                    />
                    <Route
                        exact path="/wizyta"
                        render={() => (
                            <CustomerPage>
                                <VisitPage/>
                            </CustomerPage>
                        )}
                    />
                    <Route
                        path="/zabiegi/:treatmentGroup/:treatment"
                        render={props => (
                            <CustomerPage>
                                <TreatmentPage
                                    id={{
                                        group: props.match.params.treatmentGroup,
                                        member: props.match.params.treatment,
                                    }}
                                />
                            </CustomerPage>
                        )}
                    />
                    <Route
                        path="/zabiegi"
                        render={() => (
                            <CustomerPage>
                                <TreatmentPage/>
                            </CustomerPage>
                        )}
                    />
                    <Route
                        path="/blog/:topicId"
                        render={props => (
                            <CustomerPage>
                                <BlogPage topicId={props.match.params.topicId}/>
                            </CustomerPage>
                        )}
                    />
                    <Route
                        path="/blog"
                        render={() => (
                            <CustomerPage>
                                <BlogPage/>
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
