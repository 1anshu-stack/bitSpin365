import React from 'react';

const GameCard = ({ image }) => {
    return (
        <div className="p-0 sm:p-2 rounded-lg shadow-lg w-50 sm:w-64 my-2">
            {/* Rounded corners on the image */}
            <img src={image} alt="" className="w-50 sm:w-100 h-20 sm:h-64 object-cover rounded-lg" />
        </div>
    );
};

export default GameCard;
