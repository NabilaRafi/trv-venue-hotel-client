import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow , configure} from 'enzyme';
import BaseButton from './index';

configure({adapter: new Adapter()});

describe('BaseButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BaseButton />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});

describe('PrimaryButton has value', () => {
  it('renders correctly', () => {
      // Render a primary button with value and classname in the document
      const primaryButton = shallow(<BaseButton title="View Deal" onClick />);
    
      expect(primaryButton.text()).toEqual('View Deal');
      
      expect(primaryButton.hasClass('primary_btn'));
    })
});