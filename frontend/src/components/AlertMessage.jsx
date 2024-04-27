// eslint-disable-next-line no-unused-vars
import React from 'react';

const AlertMessage = ({ message, type }) => {
    return (
        <div className={`notification ${type}`}>
            <button className="delete"></button>
            {message}
        </div>
    );
}

export default AlertMessage;
