import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import { shallow , configure} from 'enzyme';
import RoomComponent from './index';
import image1 from '../../assets/image1.png';

configure({adapter: new Adapter()});

const mergedProps = {
    img_src: image1,
    name: "Hotel Blue moon",
    rating: 4,
    price: 78,
    distance: 800,
    amenities: ["free_wifi", "parking"],
}

describe('Render Card component', () => {
    const wrapper = shallow(<Provider store={configureStore}><RoomComponent {...mergedProps}/></Provider>);
    it(' should render card component without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});