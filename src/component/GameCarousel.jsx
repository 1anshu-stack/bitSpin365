import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import image1 from '../assets/card1.jpg';
import image2 from '../assets/card2.jpg';

const GameCarousel = () => {
    const [scrollX, setScrollX] = useState(0);

    const handlePrev = () => {
        setScrollX(scrollX + 150); // Adjust this value based on card width
    };

    const handleNext = () => {
        setScrollX(scrollX - 150); // Adjust this value based on card width
    };

    return (
        <div className="relative">
            <button
                onClick={handlePrev}
                className="absolute top-50% left-0 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-50% right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10"
            >
                &gt;
            </button>
            <div className="flex flex-wrap overflow-hidden mr-4">
                <div
                    className="flex transition-transform duration-300 touch-action: pan-x"
                    style={{ transform: `translateX(${scrollX}px)` }}
                >
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
                    <Link to="/play-game">
                    <GameCard image={image1} />
                    </Link>
                    <Link to="/play-game">
                    <GameCard image={image1} />
                    </Link>
                    {/* Add more GameCard components as needed */}
                </div>
            </div>
        </div>
    );
};

export default GameCarousel;
