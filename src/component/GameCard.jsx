import React from 'react';
// const image = require('../assets/card1.jpg');

const GameCard = ({ image }) => {
    return (
        <div className="p-4 rounded-lg shadow-lg w-full md:w-64 my-4 md:my-8">
            {/*we can add play logo when hover over on cards. */}
            <img src={image} alt="" className="w-full h-full object-cover rounded-t-lg" />
        </div>
    );
};

export default GameCard;
