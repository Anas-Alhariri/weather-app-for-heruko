/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import './SearchBar.scss'
import { API_KEY, API_URL, CITY, UNIT } from '../../_globals/variables'
import { AppContext } from '../../_globals/AppContext'


const SearchBar = () => {
    const { setWeatherObject } = useContext(AppContext)

    const formSubmissionHandler = (event) => {
        event.preventDefault()
        const form = event.target.parentNode
        const searchInput = form.search.value
        axios.get(API_URL + searchInput + UNIT + API_KEY)
            .then(res => {
                setWeatherObject({ ...res.data })
                // console.log(res.data)
                // console.log(API_URL)
            })
        // console.log(searchInput)
    }

    useEffect(() => {
        axios.get(API_URL + CITY + API_KEY).then(res => {
            setWeatherObject({ ...res.data })
        })
    }, []);

    return (
        <form method='post' action='' className="search-bar">
            <input className='search-bar__input' type="text" name="search" id="search" placeholder='Type your City name here...' />
            <button className='search-bar__btn' type="submit" onClick={formSubmissionHandler}>Search</button>
        </form>
    )
}

export default SearchBar
