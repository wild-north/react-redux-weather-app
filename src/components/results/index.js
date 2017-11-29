import React from 'react';

export const Results = ({ temperature }) => (
    <div className="results">
        <ul>
            <li>Temperature: { temperature }</li>
        </ul>
    </div>
);