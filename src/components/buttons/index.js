import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PrimaryButton = (props) => {
    return (
        <button className="primary_btn" {...props}>
            {props.title}
        </button>
    )

}

PrimaryButton.propTypes = {
    title: PropTypes.string,
}

export default PrimaryButton;