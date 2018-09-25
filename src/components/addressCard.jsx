import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 *  @namespace AddressCard: small bootstrap component for displaying address information
 *  @param {string} location: office location name, i.e. "Halifax"
 *  @param {object} address: office address object { name, premise, street, city, postcode }
 *  @param {object} contact: contact information object { telephone }
 *  @param {string} open: office opening times
 *  @param {object} rest: any other HTML attributes required for parent level div, i.e. { style, id }
 *  @returns jsx component
 */

export default class AddressCard extends Component {

    render() {
        const { location, address, contact, open, ...rest } = this.props;
        const { name, premise, street, city, postcode} = address;
        const { telephone } = contact;

        return (
            <div className="card" {...rest}>
                <div className="card-body">
                    <h5 className="card-title">{location} Office</h5>
                    <p className="card-text">
                        {name}
                        <br />
                        {premise}
                        <br />
                        {street}
                        <br />
                        {city}
                        <br />
                        {postcode}
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Tel</strong>: {telephone}</li>
                    <li className="list-group-item"><strong>Open</strong>: {open}</li>
                </ul>
            </div>
        );
    }
};