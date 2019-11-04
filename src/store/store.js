import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const createStoreMiddleware = applyMiddleware(thunk)(createStore);
const configureStore = createStoreMiddleware(rootReducer);

export default configureStore;