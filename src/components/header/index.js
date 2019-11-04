import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import logo from '../../assets/trivago-logo.png';

class Header extends Component {
    render() {
        const { userFirstName, userLastName} = this.props;
        return (
            <div>
                <header className="App-header">
                    <div className="image-wrapper">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <p className="user-name">{userFirstName} {userLastName}</p>
                </header>
            </div>
        )
    }
};

Header.propTypes = {
    name: PropTypes.string,
}

const mapStateToProps = (state) => ({
    userFirstName: state.userFirstName,
    userLastName: state.userLastName,
})

const HeaderComponent = connect(
    mapStateToProps,
    {}
)(Header)

export default HeaderComponent;
