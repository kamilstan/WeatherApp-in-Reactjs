import React from 'react';
import './Result.css'

const Result = (props) => {
    const { date, sunrise, sunset, temp, pressure, wind, city, err } = props.weather
    let content = null;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    if (!err && city) {
        content = (
            <>
                <h2>Dane dotyczące miasta: <em>{city}</em></h2>
                <h5>Dane na dzień: {date}</h5>
                <h3>Temperatura: {temp} &#176;C</h3>
                <h3>Ciśnienie: {pressure} hPa</h3>
                <h3>Prędkość wiatru: {wind} m/s</h3>
                <h3>Wschód słońca: {sunriseTime}</h3>
                <h3>Zachód słońca:{sunsetTime}</h3>
            </>
        )
    }
    return (
        <div className='result'>
            {err ? `Nie ma w bazie miasta o nazwie ${city}` : content}

        </div>
    );
}

export default Result;
