import React from 'react';
import './HeaderEx.css';

function HeaderEx({ users }) {
    // Destructuring for cleaner code
    const { unitNo, imageUrl, name, role } = users;

    return (
        <li className="header-item">
            <div className='display'>
                <img 
                    src={imageUrl || 'https://via.placeholder.com/150'} 
                    alt={`${name}'s profile`} 
                />
                <div className="info-container">
                    <h2>ID: {unitNo}</h2>
                    <h1>{name}</h1>
                    <p>{role}</p>
                </div>
            </div>
        </li>
    );
}

export default HeaderEx;