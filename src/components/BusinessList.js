/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React from "react";
import Business from "./Business.js";
import classes from './BusinessList.module.css';

const BusinessList = function() {
    const businessList = [{},{},{},{},{},{},{}, {}];
    const businesses = businessList.map((b) =>{
        return <Business />;
    });
    return (<div className={classes.businessesContainer}>{businesses}</div>);
};

export default BusinessList;