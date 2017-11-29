import React from 'react';

export const Form = ({ cityName, getWeather, changeCityName }) => (
    <form action="#" onSubmit={ getWeather }>
        <input type="text"
               value={ cityName }
               onChange={ (ev) => changeCityName(ev.target.value) }
        />
        <button>OK</button>
    </form>
);