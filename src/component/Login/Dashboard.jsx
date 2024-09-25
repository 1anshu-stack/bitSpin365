// import { useState } from 'react';
import GameCarousel from '../GameCarousel.jsx';
import JackpotSection from '../JackpotSection.jsx';
// import DepositBox from "./DepositBox.jsx";
import ScrollableInfoSection from "./ScrollableInfoSection.jsx";
import PromoCard from "./PromoCard.jsx";


const Dashboard = () => {
    // const [amount, setAmount] = useState('');
    // const [currency, setCurrency] = useState('USD');
    //
    // const handleAmountChange = (e) => setAmount(e.target.value);
    // const handleCurrencyChange = (e) => setCurrency(e.target.value);

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

            {/* Promotions Section */}
            <section className="py-5 px-2 md:px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Promotions</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <PromoCard
                        frontTitle="5 BTC + 180 Free Spins"
                        backTitle="Exclusive Offer!"
                        backDescription="Get 5 BTC and 180 Free Spins on your first deposit!"
                    />
                    <PromoCard
                        frontTitle="100% Welcome Bonus"
                        backTitle="New Player Bonus"
                        backDescription="Double your first deposit with our 100% Welcome Bonus!"
                    />
                    <PromoCard
                        frontTitle="VIP Membership"
                        backTitle="Join the VIP Club"
                        backDescription="Enjoy special rewards and bonuses as a VIP member."
                    />
                    <PromoCard
                        frontTitle="Daily Free Spins"
                        backTitle="Spin to Win!"
                        backDescription="Claim your daily free spins and win big prizes!"
                    />
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
