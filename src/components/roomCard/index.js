import React from 'react';
import Card from '../card';
import PrimaryButton from '../buttons';
import './style.css';

const gotoConfirmation= (id, prop) => {
    console.log(id);
    console.log(prop)
    prop.saveBookingDetails(id);
    prop.history.push('booking-confirmation');
}

const Rooms = (props) => {
    const roomComponent = props.room_details.map(room => (
        <div key={room.id} className="room_component_wrapper">
            <div>
                <h5>Guests</h5>
                <p>{room.max_occupancy}</p>
            </div>
            <div>
                <h5>Room Type</h5>
                <p>{room.name}</p>
            </div>
            <div>
                <h5>Price</h5>
                <p>{room.price_in_usd}</p>
            </div>
            <PrimaryButton id="book_now_btn" title="Book Now" {...props} onClick={() => gotoConfirmation(room.id, props.history)}/>
        </div>
    ))
    return (
        <div>
            <Card
                name={props.name}
                rating={props.rating}
                price_category={props.price_category}
                distance={props.distance}
                img_src={props.img_src}
                key={props._id}
                amenities={props.amenities}
            />
            <div>
                {roomComponent}
            </div>
        </div>
    )

}

export default Rooms;