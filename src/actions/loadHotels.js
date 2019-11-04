import axiosClient from '../utils/axiosClient';
import { ActionConstants } from '../constants';

const mockAPIURL  = 'http://localhost:3003/api/hotels';

export const getAllHotelsSuccess = (response) => {
    if(response !== null) {
        return {
            type: ActionConstants.GET_ALL_HOTELS_SUCCESS,
            payload: response
        }
    }

    return {
        type: ActionConstants.GET_ALL_HOTELS_ERROR,
        payload: response
    }
}

export const getAllHotelsFailure = (error) => {
    return {
        type: ActionConstants.GET_ALL_HOTELS_FAILURE,
        payload: error,
    }
}

export const getAllHotels = () => (dispatch) => {
    axiosClient('get',mockAPIURL, null )
    .then((response) => {
        // to process only json data response
        const isJSON = response.headers['content-type'].indexOf('json') > 0;
        if(isJSON) {
            dispatch(getAllHotelsSuccess(response.data))
        } else {
            dispatch(getAllHotelsFailure(true))
        }
    })
    .catch((error) => { dispatch(getAllHotelsFailure(error))});
}