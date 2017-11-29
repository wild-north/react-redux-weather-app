import React from 'react';

export const Loader = ({ isLoading, cityName }) => (
    <div>
        {
            isLoading
                ? <h1>Loading...</h1>
                : <h1>{ cityName }</h1>
        }
    </div>
);