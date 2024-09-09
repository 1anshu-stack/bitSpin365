import React, { useState } from 'react';

const SquareBox = ({ imageSrc, onStartPlaying }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="relative w-80 h-80 mx-auto my-10">
            {/* Container for the rectangular box */}
            <div className="w-full h-full flex border-2 border-gray-300 rounded-lg bg-white">
                {/* Left Side: Start Playing */}
                <div className="w-1/2 p-4 flex items-center justify-center bg-gray-100">
                    <button
                        onClick={() => setShowPopup(true)}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                    >
                        Start Playing
                    </button>
                </div>
                {/* Right Side: Image */}
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        src={imageSrc}
                        alt="Game"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-sm mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Welcome to the Game!</h2>
                        <p className="mb-4">Click below to start playing and have fun!</p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SquareBox;
