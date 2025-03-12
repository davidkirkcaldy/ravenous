/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React from "react";
import Business from "./Business.js";
import classes from './BusinessList.module.css';

function BusinessList(props) {
    const businesses = props.businesses.map((bus) =>{
        return <Business business={bus} />;
    });
    return (<div className={classes.businessesContainer}>{businesses}</div>);
};

export default BusinessList;