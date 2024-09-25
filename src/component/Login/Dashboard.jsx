// import { useState } from 'react';
import GameCarousel from '../GameCarousel.jsx';
import JackpotSection from '../JackpotSection.jsx';
// import DepositBox from "./DepositBox.jsx";
import ScrollableInfoSection from "./ScrollableInfoSection.jsx";
import PromoCard from "./PromoCard.jsx";
import image1 from '../../assets/promocard2.png';
import { FaStar, FaDollarSign, FaTrophy, FaCoins, FaRocket } from 'react-icons/fa';

const Dashboard = () => {
    // const [amount, setAmount] = useState('');
    // const [currency, setCurrency] = useState('USD');
    //
    // const handleAmountChange = (e) => setAmount(e.target.value);
    // const handleCurrencyChange = (e) => setCurrency(e.target.value);
    const flipContent1 = [
        { text: "1st deposit: 100% up to 1 BTC", icon: <FaDollarSign className="text-green-500" /> },
        { text: "+ 180 Free Spins", icon: <FaCoins className="text-yellow-500" /> },
        { text: "20 Instant free spins + 160 (20 per day, starting in 24 hours)", icon: <FaStar className="text-blue-500" /> },
        { text: "A minimum deposit of 0.0004 BTC is required to receive the 180 free spins.", icon: <FaRocket className="text-red-500" /> },
        { text: "Minimum deposit to receive only the bonus is 0.0003 BTC.", icon: <FaRocket className="text-red-500" /> },
        { text: "Bonus Terms & Conditions", icon: <FaTrophy className="text-orange-500" /> },
    ];

    const flipContent2 = [
        { text: "Cash inside: $5.00", icon: <FaDollarSign className="text-green-500" /> },
        { text: "Rules: Play any game to get the right hammer and break your Piggy!", icon: <FaCoins className="text-yellow-500" /> },
        { text: "Type: Loyalty Program", icon: <FaStar className="text-blue-500" /> },
        { text: "Contributing Games: All", icon: <FaTrophy className="text-orange-500" /> },
        { text: "Piggy will reset in: 29d 23:52:47", icon: <FaRocket className="text-red-500" /> },
        { text: "Terms & Conditions", icon: <FaTrophy className="text-orange-500" /> },
    ];

    const flipContent3 = [
        { text: "Prize Pool: €5,000 & 5,000 Free Spins", icon: <FaTrophy className="text-orange-500" /> },
        { text: "Places Paid: 150 (1st prize - €1,500)", icon: <FaCoins className="text-yellow-500" /> },
        { text: "Type: Slot Tournament", icon: <FaStar className="text-blue-500" /> },
        { text: "Frequency: Weekly", icon: <FaRocket className="text-red-500" /> },
        { text: "Contributing Games: Play any slot game and earn points", icon: <FaTrophy className="text-orange-500" /> },
        { text: "Terms & Conditions", icon: <FaTrophy className="text-orange-500" /> },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
            {/* Header Section with Deposit Box */}
            <section
                className="flex flex-col items-center justify-center text-center py-10 relative bg-gradient-to-r from-pink-600 via-indigo-900 to-pink-600 h-screen">
                {/* Welcome Message */}
                <h1 className="text-4xl font-bold text-white mb-8">Welcome to Your Dashboard</h1>

                {/*/!* Deposit Box *!/*/}
                {/*<div className="flex flex-col items-center mb-8">*/}
                {/*    <DepositBox*/}
                {/*        amount={amount}*/}
                {/*        handleAmountChange={handleAmountChange}*/}
                {/*        currency={currency}*/}
                {/*        handleCurrencyChange={handleCurrencyChange}*/}
                {/*    />*/}
                {/*</div>*/}
                <ScrollableInfoSection/>
                {/* Navbar at the Bottom */}
                <nav className="bg-white border-gray-200 dark:bg-gray-900 absolute bottom-0 left-0 right-0">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li><a href="#"
                                       className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                       aria-current="page">Slots</a></li>
                                <li><a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Table
                                    Games</a></li>
                                <li><a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">BitSpins
                                    Originals</a></li>
                                <li><a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Live
                                    Casino</a></li>
                                <li><a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GameShows</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

            {/* Game Sections */}
            <section className="py-5 md:py-10 px-2 md:px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Featured Games</h3>
                <GameCarousel/>
            </section>

            <section className="py-5 md:py-5 px-2 md:px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Table Games</h3>
                <GameCarousel/>
            </section>

            <section className="py-5 md:py-5 px-2 md:px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Roulette Games</h3>
                <GameCarousel/>
            </section>

            {/* Jackpot Section */}
            <div className="py-5 md:py-25 px-2 md:px-4 text-2xl md:text-3xl font-bold">
                <JackpotSection/>
            </div>

            {/* Live Casino Section */}
            <section className="py-5 md:py-30 px-2 md:px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Live Casino</h3>
                <GameCarousel/>
            </section>

            <section className="py-5 px-2 md:px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Promotions</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <PromoCard title="5 BTC + 180 Free Spins"
                               color="bg-gradient-to-r from-pink-600 via-indigo-900 to-pink-600"
                               flipContent={flipContent1}/>
                    <PromoCard title="Your Piggy Bank" image={image1} flipContent={flipContent2}/>
                    <PromoCard title="Slot Wars" color="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500"
                               flipContent={flipContent3}/>
                    <PromoCard title="Fourth Card" image={image1}/>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-10 md:py-16 px-4 md:px-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 rounded-lg p-4 md:p-6 hover:bg-gray-700">
                        <h4 className="text-lg md:text-xl font-bold mb-2">Secure Payments</h4>
                        <p>We guarantee fast, secure transactions, giving you peace of mind with every bet.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 md:p-6 hover:bg-gray-700">
                        <h4 className="text-lg md:text-xl font-bold mb-2">24/7 Support</h4>
                        <p>Our dedicated support team is available around the clock to assist you with any queries.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 md:p-6 hover:bg-gray-700">
                        <h4 className="text-lg md:text-xl font-bold mb-2">Exciting Rewards</h4>
                        <p>Enjoy fantastic bonuses and rewards that enhance your gaming experience.</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 py-4 md:py-6 text-center text-white">
                <p>&copy; 2024 BitSpin365</p>
                <p>All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
