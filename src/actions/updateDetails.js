import { ActionConstants } from '../constants';

export const saveBookingDetails = (data) =>{
    return {
        type: ActionConstants.SAVE_BOOKING_DETAILS,
        payload: data,
    }
}

export const updateFilter = (data) => {
    return {
        type: ActionConstants.UPDATE_FILTER,
        payload: data
    }
}