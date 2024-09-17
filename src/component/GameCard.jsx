import React from 'react';

const GameCard = ({ image }) => {
    return (
        <div className="p-2 sm:p-4 rounded-lg shadow-lg w-full sm:w-64 my-4">
            <img src={image} alt="" className="w-50 sm:w-50 h-20 sm:h-64 object-cover rounded-t-lg" />
        </div>
    );
};

export default GameCard;
