import React, { Component } from 'react';
import { connect } from 'react-redux';
import axiosClient from '../utils/axiosClient';
import { getAllHotels } from '../actions/loadHotels';
import Card from '../components/card';
import generateData from '../utils/generateData';

class ManageHotels extends Component {
    constructor(props) {
        super(props);
        this.deleteHotel = this.deleteHotel.bind(this);
        this.addHotel = this.addHotel.bind(this);
    }

    componentDidMount() {
        this.props.getAllHotels();
    }

    addHotel() {
        const URL = 'http://localhost:3003/hotels/';
        const generatedData = generateData();
        console.log(generatedData);
        axiosClient('patch', URL, {data: generatedData});
    }

    deleteHotel(id) {
        const { hotels } = this.props;
        let hotelToDelete = "";
        const URL = `http://localhost:3003/hotel/:${id}`;
        hotels.forEach(element => {
           if (element._id === id) {
            hotelToDelete =  element
           }
           return hotelToDelete;
           
       });
        console.log(hotelToDelete);

        axiosClient('delete',URL, null)
        .then(resp => {
            console.log(resp.data)
        }).catch(error => {
            console.log(error);
        }); 
    }

    render(){
        const { hotelMainData } = this.props;
        const CardMapping = hotelMainData && hotelMainData.map(hotel => 
            <Card 
                name={hotel.name}
                rating={hotel.rating}
                price_category={hotel.price_category}
                distance={hotel.distance_to_venue}
                img_src={hotel.image}
                price={hotel.price}
                key={hotel._id}
                amenities={hotel.amenities}
                handleclick={() => this.deleteHotel(hotel._id)} // delete selected hotel details
                buttonTitle="Delete"
            />
            
            )
        return (
            <div>
                <h3>Manage Hotels</h3>
                <button className="primary_btn" onClick={this.addHotel}>
                    ADD Hotel
                </button>
                {
                    CardMapping
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    hotelMainData: state.hotelMainData,
    hotels: state.hotels,
});

const ManageHotelsView = connect(
    mapStateToProps,
    {
        getAllHotels,
    }
)(ManageHotels);

export default ManageHotelsView;
