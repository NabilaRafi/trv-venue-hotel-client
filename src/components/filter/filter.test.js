import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import { shallow , configure} from 'enzyme';
import FilterComponent from './index';

configure({adapter: new Adapter()});

describe('Render Card component', () => {
    const wrapper = shallow(<Provider store={configureStore}><FilterComponent /></Provider>);
    it(' should render card component without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
