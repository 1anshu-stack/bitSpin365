// PromoCard.jsx
import React, { useState } from 'react';

const PromoCard = ({ image, title, description }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="relative w-60 h-40 m-4 perspective">
            <div
                className={`relative w-full h-full transition-transform duration-500 transform ${flipped ? 'rotate-y-180' : ''}`}
            >
                {/* Front Side */}
                <div className="absolute backface-hidden w-full h-full">
                    <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute top-2 right-2">
                        <button onClick={handleFlip} className="bg-white p-2 rounded-full shadow">
                            ℹ️
                        </button>
                    </div>
                </div>
                {/* Back Side */}
                <div className="absolute backface-hidden w-full h-full bg-white rounded-lg text-black flex items-center justify-center flex-col rotate-y-180">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-center p-2">{description}</p>
                    <button onClick={handleFlip} className="bg-red-500 text-white p-2 rounded mt-2">
                        ✖️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromoCard;
