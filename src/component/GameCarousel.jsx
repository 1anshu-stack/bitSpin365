import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import image1 from '../assets/card1.jpg';

const GameCarousel = () => {
    const [scrollX, setScrollX] = useState(0);

    const handlePrev = () => {
        setScrollX(scrollX + 200); // Adjust based on card width
    };

    const handleNext = () => {
        setScrollX(scrollX - 200); // Adjust based on card width
    };

    return (
        <div className="relative overflow-x-hidden">
            {/* Left Button */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10"
            >
                &lt;
            </button>

            {/* Right Button */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10"
            >
                &gt;
            </button>

            {/* Cards */}
            <div className="flex no-scrollbar transition-transform duration-300" style={{ transform: `translateX(${scrollX}px)` }}>
                <div className="flex space-x-4">
                    <Link to="/play-game">
                        <GameCard image={image1} />
                    </Link>
                    <Link to="/play-game">
                        <GameCard image={image1} />
                    </Link>
                    <Link to="/play-game">
                        <GameCard image={image1} />
                    </Link>
                    <Link to="/play-game">
                        <GameCard image={image1} />
                    </Link>
                    {/* Add more cards */}
                </div>
            </div>
        </div>
    );
};

export default GameCarousel;
