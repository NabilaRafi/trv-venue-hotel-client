import axiosClient from '../utils/axiosClient';
import { ActionConstants } from '../constants';
import actionConstants from '../constants/action-constants';

const mockAPIURL  = 'http://localhost:3003/hotels/';

export const getSelectedHotelFailure = (error) => {
    return {
        type: ActionConstants.SELECTED_HOTEL_FAILURE,
        payload: error,
    }

}

export const getSelectedHotelSuccess = (response) => {
    if (response !== null) {
        return {
            type: actionConstants.SELECTED_HOTEL_SUCCESS,
            payload: response,
        }
    }

    return {
        type: actionConstants.SELECTED_HOTEL_ERROR,
        payload: true,
    }

}
export const getSelectedHoteldetails = (hotel_id) => (dispatch) => {
    axiosClient('get',`${mockAPIURL}?_id=${hotel_id}`, null)
    .then((response) => {
        // to process only json data response
        const isJSON = response.headers['content-type'].indexOf('json') > 0;
        if(isJSON) {
            dispatch(getSelectedHotelSuccess(response.data))
        } else {
            dispatch(getSelectedHotelFailure(true))
        }
    })
    .catch((error) => { dispatch(getSelectedHotelFailure(error))});
}