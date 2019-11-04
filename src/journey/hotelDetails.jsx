import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rooms from '../components/roomCard';
import { saveBookingDetails } from '../actions/updateDetails';
// import PropTypes from 'prop-types';

class HotelDetails extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        const { selectedHotel, roomsArray } = this.props;

        console.log(selectedHotel);
        return (
            <div className="hotel_details">
                <Rooms
                    name={selectedHotel.name}
                    rating={selectedHotel.rating}
                    price_category={selectedHotel.price_category}
                    distance={selectedHotel.distance_to_venue}
                    img_src={selectedHotel.images[0]}
                    price={selectedHotel.price_in_usd}
                    key={selectedHotel._id}
                    room_details={roomsArray}
                    history={this.props}
                    amenities={selectedHotel.amenities}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedHotel: state.selectedHotel,
    roomsArray: state.roomsArray,

})

const HotelDetailsView = connect(
    mapStateToProps,
    { saveBookingDetails },
    )(HotelDetails);

export default HotelDetailsView;
