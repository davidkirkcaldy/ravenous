/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React from 'react';
import classes from './Business.module.css'

const business = {
    image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: "Pizza Reallyfast",
    address: "5 High Street",
    city: "Teddington",
    state: "surrey",
    zipcode: "11111",
    category: "Japanese",
    rating: 4,
    reviewCount: 90
}

function BusinessAddress() {
    return  (
    <div className={classes.businessAddress}>
        <ul>
            <li>{business.address}</li>
            <li>{business.city}</li>
            <li>{business.state}</li>
            <li>{business.zipcode}</li>
        </ul>
    </div>
    );
}

function BusinessInfo() {
    return (                    
    <div className={classes.businessInfo}>
        <ul>
            <li className="category">{business.category}</li>
            <li className="rating">{business.rating}</li>
            <li>{business.reviewCount}</li>
        </ul>
    </div>
    );
}

function Business() {

    return (
        <div className={classes.businessContainer}>
            <div className={classes.businessImage}>
                <img src={business.image} alt={business.name} />  
            </div>
            <h2>{business.name}</h2>
            <div className={classes.businessDetails}>
                <BusinessAddress />
                <BusinessInfo />
            </div>
        </div>
    );
}

export default Business;