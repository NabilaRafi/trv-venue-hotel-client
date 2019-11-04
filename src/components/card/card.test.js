import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow , configure} from 'enzyme';
import CardComponent from './index';
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
    const wrapper = shallow(<CardComponent  {...mergedProps}/>);
    it(' should render card component without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should have a image wrapper', () => {
        expect(wrapper.hasClass('image_wrapper'));
    });
    it('should have a image tag to render logo', () => {
        expect(wrapper.find('img.image')).toHaveLength(1);
    })
    it('should have a content wrapper', () => {
        expect(wrapper.hasClass('content_wrapper'));
    })
    it('should have hotel name', () => {
        expect(wrapper.find('h3.hotel_name')).toHaveLength(1);
        expect(wrapper.find('h3.hotel_name').text()).toEqual(mergedProps.name);
    })
    it('should have hotel rating', () => {
        expect(wrapper.find('p.hotel_rating')).toHaveLength(1);
        expect(wrapper.find('p.hotel_rating').text()).toEqual(`Rating ${mergedProps.rating}`);
    })
    it('should have hotel distance', () => {
        expect(wrapper.find('p.hotel_distance')).toHaveLength(1);
        expect(wrapper.find('p.hotel_distance').text()).toEqual(`${mergedProps.distance} meters away from Leipzig`);
    })
});