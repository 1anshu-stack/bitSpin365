import { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import image1 from '../assets/card1.jpg';
import image2 from '../assets/card2.jpg';
const GameCarousel = () => {
    const [scrollX, setScrollX] = useState(0); // Keeps track of the scroll position
    const cardWidth = 240; // Adjust card width including padding and margin
    const containerWidth = cardWidth * 4; // Number of cards visible in viewport
    const totalCardWidth = cardWidth * 8; // Number of total cards (update as needed)

    // Calculate boundaries
    const maxScrollX = 0;
    const minScrollX = -(totalCardWidth - containerWidth);

    const handlePrev = () => {
        // Move right (previous)
        setScrollX((prevScrollX) => Math.min(prevScrollX + cardWidth, maxScrollX));
    };

    const handleNext = () => {
        // Move left (next)
        setScrollX((prevScrollX) => Math.max(prevScrollX - cardWidth, minScrollX));
    };

    return (
        <div className="relative overflow-hidden bg-gray-900 py-1 md:py-4 rounded-lg">
            {/* Left Button */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg z-10 transition-transform duration-300 active:scale-90"
            >
                &lt;
            </button>

            {/* Right Button */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg z-10 transition-transform duration-300 active:scale-90"
            >
                &gt;
            </button>

            {/* Game Cards */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${scrollX}px)` }}
            >
                <div className="flex space-x-4">
                    <Link to="/play-game">
                        <GameCard image={image1} />
                    </Link>
                    <Link to="/play-game">
                        <GameCard image={image2} />
                    </Link>
                    <Link to="/play-game">
                        <GameCard image={image1} />
                    </Link>
                    <Link to="/play-game">
                        <GameCard image={image2} />
                    </Link>
                    <Link to="/play-game">
                        <GameCard image={image1} />
                    </Link>
                    <Link to="/play-game">
                        <GameCard image={image2} />
                    </Link>
                    {/* Add more GameCard components */}
                </div>
            </div>
        </div>
    );
};

export default GameCarousel;
