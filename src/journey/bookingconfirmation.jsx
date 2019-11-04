import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

class BookingConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.generateId = this.generateId.bind(this);
    }


generateId = () => {
    let ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ID_LENGTH = 8;
    let rtn = '';
    for (let i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
}

    render() {
        const { selectedRoomDetails, selectedHotel, firstName, lastName } = this.props;
        return (
            <div className="confirmation_view"> 
                <h1>Thankyou {firstName} for Booking with us</h1>
                <h4>Your booking details</h4>
                <ul>
                    <li>
                        <h3>Booking Reference:</h3>
                        <p>{this.generateId()}</p>
                    </li>
                    <li>
                        <h3>Guest Name:</h3>
                        <p>{firstName} {lastName}</p>
                    </li>
                    <li>
                        <h3>Hotel Name:</h3>
                        <p>{selectedHotel.name}</p>
                    </li>
                    <li>
                        <h3>Location:</h3>
                        <p>Leipzig, Germany</p>
                    </li>
                    <li>
                        <h3>Room Type:</h3>
                        <p>{selectedRoomDetails.name}</p>
                    </li>
                    <li>
                        <h3>Price:</h3>
                        <p>{selectedRoomDetails.price_in_usd}</p>
                    </li>
                    <li>
                        <h3>Amenities:</h3>
                        {selectedHotel.amenities.map(amenity => <p>{amenity}</p>)}
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedRoom: state.selectedRoom,
    selectedRoomDetails: state.selectedRoomDetails,
    selectedHotel: state.selectedHotel,
    firstName: state.userFirstName,
    lastName: state.userLastName,
})

const BookingConfirmationView = connect(
    mapStateToProps,
    {}
)(BookingConfirmation);

export default BookingConfirmationView;