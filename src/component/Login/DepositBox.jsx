import { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai';
import { FaBitcoin, FaDollarSign, FaEthereum, FaGift } from 'react-icons/fa'; // Added gift icon

const DepositBox = () => {
    const [isBonusOn, setIsBonusOn] = useState(false);
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isBonusCodeVisible, setIsBonusCodeVisible] = useState(false);
    const [bonusCode, setBonusCode] = useState('');

    // Toggle handler for bonus switch
    const handleBonusToggle = () => {
        setIsBonusOn(!isBonusOn);
    };

    // Handler for displaying/hiding the info box
    const handleInfoToggle = () => {
        setIsInfoVisible(!isInfoVisible);
    };

    // Handler for displaying the bonus code input section
    const handleBonusCodeToggle = () => {
        setIsBonusCodeVisible(!isBonusCodeVisible);
        setBonusCode(''); // Clear bonus code input when toggling
    };

    // Handler for input change to monitor bonus code value
    const handleBonusCodeChange = (e) => {
        setBonusCode(e.target.value);
    };

    return (
        <div className="relative bg-blue-950 text-white rounded-lg shadow-lg p-8 text-center w-96 mx-auto mt-10">
            <h2 className="text-3xl mb-6 font-extrabold text-yellow-300">Enter Deposit Amount</h2>

            {/* Large number input for amount, no scroll */}
            <div className="relative mb-6">
                <input
                    type="text" // Changed to text to prevent increment/decrement arrows
                    inputMode="decimal" // Ensures correct number entry on mobile devices
                    placeholder="0.0005"
                    className="w-full text-center bg-transparent border-b-2 border-white text-4xl text-white focus:outline-none focus:border-yellow-300 placeholder-gray-400"
                />
            </div>

            <div className="flex justify-center space-x-2 mb-6">
                {/* Currency buttons with icons */}
                <button className="bg-purple-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500">
                    <FaBitcoin />
                    <span>BTC</span>
                </button>
                <button className="bg-purple-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500">
                    <FaDollarSign />
                    <span>USD</span>
                </button>
                <button className="bg-purple-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500">
                    <FaEthereum />
                    <span>ETH</span>
                </button>
                <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500">
                    More
                </button>
            </div>

            {/* First Deposit Bonus in a box */}
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <FaGift className="text-yellow-400 text-xl" />
                        <p className="text-lg">First Deposit Bonus</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div
                            className={`relative w-12 h-6 rounded-full cursor-pointer transition-all duration-300 ${isBonusOn ? 'bg-green-500' : 'bg-red-500'}`}
                            onClick={handleBonusToggle}
                        >
                            <div
                                className={`absolute w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${isBonusOn ? 'translate-x-6' : 'translate-x-0'}`}
                            />
                        </div>
                        <AiOutlineInfoCircle
                            onClick={handleInfoToggle}
                            className="text-yellow-400 text-xl cursor-pointer hover:text-yellow-300 transition-colors"
                        />
                    </div>
                </div>
            </div>

            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-3 px-4 w-full rounded-lg font-bold text-black mb-4 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500 transform hover:scale-105">
                PLAY WITH 0.001 BTC + 180 FREE SPINS
            </button>

            {/* Bonus code input section */}
            {isBonusCodeVisible && (
                <div className="mt-4 relative">
                    <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Enter bonus code"
                            className="w-full text-left bg-transparent border-l text-white focus:outline-none p-4"
                            value={bonusCode}
                            onChange={handleBonusCodeChange}
                        />
                        <button
                            className={`p-4 ${bonusCode ? 'bg-green-500 text-white' : 'bg-gray-500 text-gray-300'}`}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}

            {/* I have a bonus code / No bonus code link */}
            <p
                className="text-sm cursor-pointer underline hover:text-yellow-400 transition-colors mt-4"
                onClick={handleBonusCodeToggle}
            >
                {isBonusCodeVisible ? 'No bonus code' : 'I have a bonus code'}
            </p>

            {/* Info box that appears on clicking the info icon, aligned to the right of the bonus */}
            {isInfoVisible && (
                <div className="absolute top-20 right-[-310px] bg-white text-black p-4 rounded-lg shadow-lg w-64">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">Bonus Information</h3>
                        <AiOutlineClose
                            onClick={handleInfoToggle}
                            className="text-black text-xl cursor-pointer hover:text-gray-700 transition-colors"
                        />
                    </div>
                    <p className="text-sm">
                        First Deposit Bonus gives you extra funds to play with on your first deposit.
                        Make sure to read the terms and conditions before opting in.
                    </p>
                </div>
            )}
        </div>
    );
};

export default DepositBox;
