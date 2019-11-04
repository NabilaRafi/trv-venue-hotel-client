import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import LandingPage from './landingPage';
import HotelDetails from './hotelDetails';
import BookingConfirmation from './bookingconfirmation';
import ManageHotels from './manageHotels';
import Header from '../components/header';

const Home = () => (
    <div>
        <Header />
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route key="2" path="/hotel-detail" component={HotelDetails} />
                    <Route key="3" path="/booking-confirmation" component={BookingConfirmation} />
                    <Route exact path="/manage-hotel" component={ManageHotels} />

                </Switch>
            </Router>
        </div>
    </div>
)

export default Home;