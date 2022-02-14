import React from 'react'
import './WeatherCard.scss'
import placeHolder from '../../assets/weather_icons/01d@2x.png'
import SearchBar from '../searchBar/SearchBar'

let icon
const WeatherCard = (props) => {
    if (props.weather) {
        icon = require(`../../assets/weather_icons/${props.weather.weather[0].icon}@2x.png`)
    }

    return (
        props.weather ?
            <div className="card">
                <SearchBar />
                <h1 className="card__city-name">{props.weather.name}</h1>
                <h1 className="card__temp">{props.weather.main.temp} &#176;C</h1>
                <img src={icon} alt={'Weather icon ' + props.weather.weather[0].icon} className="card__weather-icon" />
                <h4 className="card__weather-description">{props.weather.weather[0].description.toUpperCase()}</h4>
            </div>
            :
            <div className="card">
                <SearchBar />
                <h1 className="card__city-name">City Name Here</h1>
                <h1 className="card__temp">32 C</h1>
                <img src={placeHolder} alt="Weather icon" className="card__weather-icon" />
                <h4 className="card__weather-description">Weather Description</h4>
            </div>
    )
}

export default WeatherCard
