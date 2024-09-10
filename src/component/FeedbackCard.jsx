import React from 'react';

const FeedbackCard = ({ name, rating, feedback, isActive, onClick }) => {
    return (
        <div
            className={`bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center w-80 h-60 transition-transform duration-300 ${isActive ? 'scale-105 z-10' : ''}`}
            onClick={onClick}
        >
            <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                ))}
            </div>
            <p className="text-sm mb-4 flex-grow flex items-center justify-center">{feedback}</p>
            <h4 className="text-xl font-bold">{name}</h4>
        </div>
    );
};

export default FeedbackCard;



