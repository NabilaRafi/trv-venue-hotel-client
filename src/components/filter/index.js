import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import PrimaryButton from '../buttons';
import { updateFilter } from '../../actions/updateDetails';

class FilterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryValue: 'low',
        }
        this._onChange = this._onChange.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.showFilter = this.showFilter.bind(this);
    }

    updateFilter() {
        this.props.updateFilter(this.state);

    }
    _onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    showFilter() {
        const listDOM = document.getElementsByClassName('filter-list');
        const showFilterId = document.getElementById('show-filter');
        if (showFilterId) {
            listDOM[0].removeAttribute('id', 'show-filter');
        } else {
            listDOM[0].setAttribute('id', 'show-filter');
        }
        

    }
    render() {
        return (
            <div className="filter-wrapper">
                <div className="filter-header" onClick={this.showFilter}>
                    <p className="filter-header-title">Filter</p>
                </div>
                <ul className="filter-list" id="show-filter">
                    <li className="filter-list-item">
                        <label>Price(in usd)</label>
                        <input
                            type="text"
                            name ="price"
                            value={this.state.price}
                            placeholder="max"
                            onChange={this._onChange}
                            htmlFor="price"
                        />
                    </li>
                    <li className="filter-list-item">
                        <label>Rating</label>
                        <input type="text" name="rating" value={this.state.rating} placeholder="min(0-5)" onChange={this._onChange}/>
                    </li>
                    <li className="filter-list-item">
                        <label>Price Category</label>
                        <select value={this.state.categoryValue} name="categoryValue" onChange={this._onChange}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </li>
                    <PrimaryButton title="update" onClick={this.updateFilter} id="filter-btn"/>
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({

})

const FilterComponentConnect = connect(
    mapStateToProps,
    {
        updateFilter
    }
)(FilterComponent);

export default FilterComponentConnect;
