/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React from 'react';
import classes from './Business.module.css'

function BusinessAddress(props) {
    return  (
    <div className={classes.businessAddress}>
        <ul>
            <li>{props.business.address}</li>
            <li>{props.business.city}</li>
            <li>{`${props.business.state} ${props.business.zipCode}`}</li>
        </ul>
    </div>
    );
}

function BusinessInfo(props) {
    return (                    
    <div className={classes.businessInfo}>
        <ul>
            <li className="category">{props.business.category}</li>
            <li className="rating">{`${props.business.rating.toFixed(1)} stars`}</li>
            <li>{`${props.business.reviewCount} reviews`}</li>
        </ul>
    </div>
    );
}

function Business(props) {

    return (
        <div className={classes.businessContainer}>
            <div className={classes.businessImage}>
                <img src={props.business.imageSrc} alt={props.business.name} />  
            </div>
            <h2 className={classes.businessTitle}>{props.business.name}</h2>
            <div className={classes.businessDetails}>
                <BusinessAddress business={props.business}/>
                <BusinessInfo business={props.business}/>
            </div>
        </div>
    );
}

export default Business;