import { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai';

const PromoCard = ({ title, color, image, flipContent }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = (e) => {
        // Prevent flipping when clicking on info or close icons
        if (e.target.className.includes('info-icon') || e.target.className.includes('close-icon')) {
            return;
        }
        setFlipped(!flipped);
    };

    return (
        <div className={`relative w-30 h-80 ${color} cursor-pointer`} onClick={handleFlip}>
            {flipped ? (
                <div className="absolute inset-0 bg-gray-800 text-white flex flex-col justify-center items-start p-4 rounded-lg">
                    <AiOutlineClose
                        onClick={() => setFlipped(false)}
                        className="absolute top-2 right-2 text-black text-xl cursor-pointer hover:text-gray-700 transition-colors"
                    />
                    <h4 className="text-xl font-bold mb-2">Welcome Package</h4>
                    <div className="space-y-2">
                        {flipContent.map((item, index) => (
                            <div key={index} className="flex items-center">
                                {item.icon} {/* Render Font Awesome icon */}
                                <span className="ml-2">{item.text}</span>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors">
                        Become an active player
                    </button>
                </div>
            ) : (
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    {image ? (
                        <img src={image} alt="Promotion" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                        <h2 className="text-2xl font-bold">{title}</h2>
                    )}
                    <AiOutlineInfoCircle
                        onClick={(e) => {
                            e.stopPropagation();
                            setFlipped(true);
                        }}
                        className="absolute top-2 right-2 text-yellow-400 text-xl cursor-pointer hover:text-yellow-300 transition-colors"
                    />
                </div>
            )}
        </div>
    );
};

export default PromoCard;
