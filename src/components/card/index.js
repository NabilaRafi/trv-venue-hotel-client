import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../buttons';
import './style.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

const imagePath = {
    "image1": image1,
    "image2": image2,
    "image3": image3,
    "image4": image4,
    "image5": image5,
    "image6": image6,
}

const showAmenities = (e) => {
    const showHideDOM = e.target.nextSibling;
    // console.log(showHideDOM);
    if (showHideDOM.id === 'show-content') {
        showHideDOM.removeAttribute('id', 'show-content')
    } else {
        showHideDOM.setAttribute('id', 'show-content')
    }
    console.log(e.target.nextSibling);
}

const Card = (props) => {
    return (
        <div className="card_wrapper">
            <div className="info-wrapper">
                <div className="image_wrapper">
                    <img src={imagePath[props.img_src]} alt={props.name} className="image"/>
                </div>
                <div className="content_wrapper">
                    <h3 className="hotel_name">{props.name}</h3>
                    <p className="hotel_rating">Rating <strong>{props.rating}</strong></p>
                    <p className="hotel_distance">{props.distance} meters away from Leipzig</p>
                    <div className="show-hide-panel">
                        <a href="javascript:" onClick={showAmenities}  className="link">more</a>
                        <ul className="show-hide-list" id="show-content">
                            {props.amenities.map(amenity => <li className="show-hide-content">{amenity}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            {props.price && 
            <div className="price_wrapper">
                <h3 className="hotel_price">$ {props.price}</h3>
                {props.buttonTitle &&
                    <PrimaryButton
                        title={props.buttonTitle}
                        onClick={props.handleclick}
                        id="deals_btn"
                    />
                }
            </div>
            }
        </div>
    )
};


Card.propTypes = {
    imgSrc : PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    price_category: PropTypes.string,
    distance: PropTypes.number,
}
export default Card;
