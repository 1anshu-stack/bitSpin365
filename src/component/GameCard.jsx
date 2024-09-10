import React from 'react';
// const image = require('../assets/card1.jpg');

const GameCard = ({ title, image, description }) => {
    return (
        <div className="p-4 rounded-lg shadow-lg w-64 my-8">
            <img src={image} alt={title} className="w-30 h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold text-yellow-300 mt-2">{title}</h2>
            <p className="text-gray-400 mt-1">{description}</p>
        </div>
    );
};

export default GameCard;
