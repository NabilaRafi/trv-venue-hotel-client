import axiosClient from '../utils/axiosClient';
import { ActionConstants } from '../constants';

const MockAPIURL = 'http://localhost:3003/api/hotels';


export const AddHotels = (data) => (dispatch) =>{
    axiosClient('post', MockAPIURL, data)
    
}