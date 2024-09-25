import { useState } from 'react';

const PromoCard = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            className={`relative w-full h-64 md:h-80 bg-gradient-to-r from-pink-600 via-indigo-900 to-pink-600 rounded-lg transform ${flipped ? 'rotate-y-180' : ''
            } transition-transform duration-500 cursor-pointer perspective`}
            onClick={handleFlip}
        >
            <div className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-white text-center ${flipped ? 'hidden' : 'block'}`}>
                <h4 className="text-2xl font-bold mb-2">5 BTC + 180 Free Spins</h4>
            </div>

            {/* Back Side of the card */}
            <div
                className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-white text-center bg-gray-800 rounded-lg transform rotate-y-180 ${flipped ? 'block' : 'hidden'
                }`}
            >
                <h4 className="text-xl font-bold mb-4">Welcome Package</h4>
                <table className="text-left text-white bg-gray-700 rounded-lg w-full">
                    <tbody>
                    <tr className="border-b border-gray-600">
                        <td className="p-2">1st Deposit</td>
                        <td className="p-2">50% up to 1 BTC</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-2">2nd Deposit</td>
                        <td className="p-2">50% up to 2 BTC</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-2">3rd Deposit</td>
                        <td className="p-2">25% up to 3 BTC</td>
                    </tr>
                    <tr>
                        <td className="p-2">4th Deposit</td>
                        <td className="p-2">25% up to 4 BTC</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PromoCard;
