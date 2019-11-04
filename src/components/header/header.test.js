import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from '../../store/store'
import { render, waitForElement } from '@testing-library/react';
import { shallow , configure} from 'enzyme';
import Component from './index';

configure({adapter: new Adapter()});


describe('HeaderComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Provider store={configureStore}><Component /></Provider>);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
