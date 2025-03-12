/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React from 'react';
import { useState } from 'react';
import classes from './SearchBar.module.css'

function SortOption(props) {
    const [optionSelected, setOptionSelected] = useState(props.value);

    function updateOptionHandler(event) {
        setOptionSelected(!optionSelected);   
    }

    let textColor = optionSelected  ? {color: 'lightblue'} : {color: 'white'};

    return (
        <button 
            className={classes.sortOption}
            onClick={updateOptionHandler} 
            style={textColor}>{props.children}</button>
    );
}

function SearchBar() {
    const [searchBusinesses, setSearchBusinesses] = useState('');
    const [searchLocations, setSearchLocations] = useState('');
    function updateBusinessesHandler(event) {
        setSearchBusinesses(event.target.value);
    }

    function updateLocationsHandler(event) {
        setSearchLocations(event.target.value);
    }

    function submitFormHandler(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitFormHandler} >
                <div className={classes.searchBar}>
                    <div className={classes.searchOptions}>
                        <ul>
                            <li ><SortOption value={false}>Best Match </SortOption></li>
                            <li ><SortOption value={false}>Highest Rated </SortOption></li>
                            <li ><SortOption value={false}>Most Reviewed </SortOption></li>
                        </ul>
                    </div>
                    <div className={classes.searchTexts}>
                        <input 
                            id='busineses' 
                            type='text' 
                            placeholder='Search Businesses' 
                            onChange={updateBusinessesHandler}
                            value={searchBusinesses} />
                        <input 
                            id='locations' 
                            type='text' 
                            placeholder='Where?' 
                            onChange={updateLocationsHandler} 
                            value={searchLocations}/>
                    </div>
                    <button className={classes.searchButton}>Let's Go</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;