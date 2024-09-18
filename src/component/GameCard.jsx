import React from 'react';

const GameCard = ({ image }) => {
    return (
        <div className="p-2 sm:p-4 rounded-lg shadow-lg w-50 sm:w-64 my-4">
            {/* Rounded corners on the image */}
            <img src={image} alt="" className="w-50 sm:w-50 h-20 sm:h-64 object-cover rounded-lg" />
        </div>
    );
};

export default GameCard;
