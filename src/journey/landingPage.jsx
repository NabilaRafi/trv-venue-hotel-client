import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllHotels } from '../actions/loadHotels';
import { getSelectedHoteldetails } from '../actions/loadSelectedHotel';
import Card from '../components/card';
import Filter from '../components/filter';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state={

        }

        this.getHotelDetails = this.getHotelDetails.bind(this);
    }

    componentDidMount() {
        this.props.getAllHotels();
    }

    componentWillReceiveProps(nextProps) {
        const { selectedHotel } = nextProps;
        selectedHotel &&  this.state.selectedId && this.props.history.push('hotel-detail');
    }

    getHotelDetails(id) {
        this.setState({
            selectedId: id,
        })
        // using the selected hotel id get details by making api call, can also be done by using the stored hotel details
        this.props.getSelectedHoteldetails(id);
    }

    componentWillUnmount() {
        //allows the user to go back and select other hotel
        this.setState({
            selectedId: false,
        })
    }

    render(){
        const { hotelMainData, hotelFilteredData } = this.props;
        const dataToDisplay = (hotelMainData && hotelFilteredData) ? hotelFilteredData : hotelMainData;
        const CardMapping = dataToDisplay && dataToDisplay.map(hotel => 
            <Card 
                name={hotel.name}
                rating={hotel.rating}
                price_category={hotel.price_category}
                distance={hotel.distance_to_venue}
                img_src={hotel.image}
                price={hotel.price}
                key={hotel._id}
                amenities={hotel.amenities}
                handleclick={() => this.getHotelDetails(hotel._id)} // get selected hotel details
                buttonTitle="View Deals"
            />
            
            )
        return (
            <div className="landing-page">
                <Filter />
                {CardMapping}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    hotels: state.hotels,
    hotelMainData: state.hotelMainData,
    selectedHotel: state.selectedHotel,
    hotelFilteredData: state.hotelFilteredData,
})

const LandingPageConnector = connect(
    mapStateToProps,
    {
        getAllHotels,
        getSelectedHoteldetails
    }
)(LandingPage);

export default LandingPageConnector;