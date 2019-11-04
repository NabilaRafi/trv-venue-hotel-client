import { ActionConstants } from '../constants';

const initialState = {
    data: [],
}

const rootReducer = (state = initialState, action={}) =>  {
    switch(action.type) {
        case ActionConstants.GET_ALL_HOTELS_SUCCESS:
            // store the required landing page data in a separate array
            let hotelMainDataArray = [];
            let lengthOfArray = action.payload.length;
            for(let i = 0; i < lengthOfArray; i++) {
                // create an array for room prices
                const roomPriceArray = action.payload[i].rooms.map(room => room.price_in_usd);
                // store the smallest value to show in the landing page
                const roomPrice = Math.min(...roomPriceArray);

                hotelMainDataArray.push({
                    _id: action.payload[i]._id,
                    rating: action.payload[i].rating,
                    name: action.payload[i].name,
                    distance_to_venue: action.payload[i].distance_to_venue,
                    amenities: action.payload[i].amenities,
                    price_category: action.payload[i].price_category,
                    price: roomPrice,
                    image: action.payload[i].images[0],
                })
            }
            return {
                ...state,
                hotels: action.payload,
                hotelMainData: hotelMainDataArray,
                userFirstName: 'John',
                userLastName: 'Doe',
            }
        case ActionConstants.GET_ALL_HOTELS_ERROR:
            return {
                ...state,
                error: true,
            }
        case ActionConstants.GET_ALL_HOTELS_FAILURE:
            return {
                ...state,
                failure: true,
            }
        case ActionConstants.SELECTED_HOTEL_SUCCESS:
            const { rooms } = action.payload[0];
            // sorts the rooms based on the price (sorted in ascending order)
            const sortedRooms = rooms.sort((a, b) => parseFloat(a.price_in_usd) - parseFloat(b.price_in_usd));

            return {
                ...state,
                selectedHotel: action.payload[0],
                roomsArray: sortedRooms,
            }
        case ActionConstants.SELECTED_HOTEL_ERROR:
            return {
                ...state,
                error: true,
            }
        case ActionConstants.SELECTED_HOTEL_FAILURE:
            return {
                ...state,
                failure: true
            }
        case ActionConstants.SAVE_BOOKING_DETAILS:
        let selectedRoomDetails;
        // store the selected room details
        state.roomsArray.forEach(element => {
            if (element.id === action.payload) {
                selectedRoomDetails = element
            }
            return selectedRoomDetails;
        });
            return {
                ...state,
                selectedRoom: action.payload,
                selectedRoomDetails,
            }
        case ActionConstants.UPDATE_FILTER:
        const { price, rating, categoryValue } = action.payload;
        // filter and update the list of hotels
        const hotelFilteredDataArray = state.hotelMainData.filter(obj => 
            (price ? obj.price <= price : true) && 
            (rating ? obj.rating >= rating: true) && 
            (categoryValue ? obj.price_category === categoryValue : true));
        return {
            ...state,
            hotelFilteredData: hotelFilteredDataArray,
        }
        default:
            return state;
    }

}

export default rootReducer;