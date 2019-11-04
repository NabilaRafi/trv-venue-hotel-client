import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import LandingPage from './landingPage';
import Header from '../components/header';

const Home = () => (
    <div>
        <Header />
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
               </Switch>
            </Router>
        </div>
    </div>
)

export default Home;