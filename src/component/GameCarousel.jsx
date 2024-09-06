import React, { useState } from 'react';
import GameCard from './GameCard';
import image1 from '../assets/card1.jpg';
import image2 from '../assets/card2.jpg';

const GameCarousel = () => {
    const [scrollX, setScrollX] = useState(0);

    const handlePrev = () => {
        setScrollX(scrollX + 300); // Adjust this value based on card width
    };

    const handleNext = () => {
        setScrollX(scrollX - 300); // Adjust this value based on card width
    };

    return (
        <div className="relative">
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10"
            >
                &gt;
            </button>
            <div className="flex overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(${scrollX}px)` }}
                >
                    <GameCard
                        // title="Game 1"
                        image={image1}
                        // description="Description of Game 1"
                    />
                    <GameCard
                        // title="Game 2"
                        image={image2}
                        // description="Description of Game 2"
                    />
                    <GameCard
                        // title="Game 3"
                        image={image1}
                        // description="Description of Game 3"
                    />
                    <GameCard
                        // title="Game 3"
                        image={image1}
                        // description="Description of Game 3"
                    />
                    <GameCard
                        // title="Game 3"
                        image={image1}
                        // description="Description of Game 3"
                    />
                    <GameCard
                        // title="Game 3"
                        image={image1}
                        // description="Description of Game 3"
                    />
                    {/* Add more GameCard components as needed */}
                </div>
            </div>
        </div>
    );
};

export default GameCarousel;
