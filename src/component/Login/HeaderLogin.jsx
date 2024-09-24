import { useState, useEffect } from 'react';
import { FaHome, FaGift, FaPiggyBank, FaDollarSign, FaQuestionCircle, FaStar, FaBell, FaUserCircle, FaSearch, FaTimes } from 'react-icons/fa';


const HeaderLogin = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [promotionsOpen, setPromotionsOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [userId, setUserId] = useState(null); // Placeholder for user ID

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
    };

    const togglePromotions = () => {
        setPromotionsOpen(!promotionsOpen);
        setSupportOpen(false);
    };

    const toggleSupport = () => {
        setSupportOpen(!supportOpen);
        setPromotionsOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleCloseSearch = () => {
        setSearchText('');
    };

    const toggleNotifications = () => {
        setNotificationsOpen(!notificationsOpen);
    };

    const toggleUserId = () => {
        setUserId(userId ? null : 'User123'); // Toggle user ID for demo
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-menu') && !event.target.closest('.menu-icon')) {
                setMenuOpen(false);
                document.body.style.overflow = 'auto';
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-blue-800 to-purple-900 py-4 px-6 md:px-8 z-50 shadow-lg">
            <div className="flex justify-between items-center">
                <div className="menu-icon flex flex-col cursor-pointer text-yellow-300" onClick={toggleMenu}>
                    <div className="bar w-8 h-1 bg-yellow-300 rounded mb-1 transition-transform duration-300 ease-in-out" style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0)' }}></div>
                    <div className="bar w-8 h-1 bg-yellow-300 rounded mb-1" style={{ opacity: menuOpen ? '0' : '1' }}></div>
                    <div className="bar w-8 h-1 bg-yellow-300 rounded" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0)' }}></div>
                </div>
                <div className="logo ml-4 md:ml-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-300">BitSpin365</h1>
                </div>
                <div className="flex items-center flex-grow mx-4 md:mx-20">
                    <div className="flex items-center relative">
                        <FaSearch className="absolute left-3 text-yellow-300" />
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleSearchChange}
                            placeholder="Search your favourite games here..."
                            className="w-full md:w-96 pl-10 p-2 rounded-full bg-gray-900 text-yellow-300 border border-gray-600 focus:outline-none"
                        />
                        {searchText && (
                            <FaTimes className="absolute right-3 text-yellow-300 cursor-pointer" onClick={handleCloseSearch} />
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                    <div className="relative" onClick={toggleNotifications}>
                        <FaBell className="text-yellow-300 cursor-pointer text-3xl hover:text-yellow-400 transition duration-300" />
                        {notificationsOpen && (
                            <div className="absolute right-0 bg-gray-800 text-yellow-300 rounded-lg shadow-lg p-4">
                                <p>No new notifications</p>
                            </div>
                        )}
                    </div>
                    <div className="relative" onClick={toggleUserId}>
                        <FaUserCircle className="text-yellow-300 cursor-pointer text-3xl hover:text-yellow-400 transition duration-300" />
                        {userId && (
                            <div className="absolute right-0 bg-gray-800 text-yellow-300 rounded-lg shadow-lg p-4">
                                <p>{userId}</p>
                                <button className="text-red-500 hover:text-red-400" onClick={() => setUserId(null)}>Logout</button>
                            </div>
                        )}
                    </div>
                    <button className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300">
                        Deposit
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav className="dropdown-menu fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-50 shadow-lg flex flex-col transition-all duration-300">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
                        <h1 className="text-2xl font-bold text-yellow-300">BitSpin365</h1>
                        <button onClick={toggleMenu} className="text-white text-3xl">&times;</button>
                    </div>
                    <ul className="flex flex-col mt-4 px-4 space-y-2">
                        <li className="py-3 px-4 rounded-lg flex items-center bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <FaHome className="text-yellow-300 mr-3" />
                            <a href="/public" className="text-yellow-300">Home</a>
                        </li>

                        <li className="relative py-3 px-4 rounded-lg flex flex-col bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <div className="flex justify-start items-center w-full cursor-pointer" onClick={togglePromotions}>
                                <FaGift className="text-yellow-300 mr-3"/>
                                <span className="text-yellow-300">Promotions</span>
                                <span className={`transition-transform duration-300 text-yellow-300 ml-auto ${promotionsOpen ? 'rotate-180' : ''}`}>▼</span>
                            </div>
                            {promotionsOpen && (
                                <ul className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                                    <li className="py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-200">
                                        <FaDollarSign className="text-gray-400 mr-3" />
                                        <a href="/jackpotz-mania" className="text-gray-400">Jackpotz Mania</a>
                                    </li>
                                    <li className="py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-200">
                                        <FaPiggyBank className="text-gray-400 mr-3" />
                                        <a href="/welcome-package" className="text-gray-400">Welcome Package</a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="py-3 px-4 rounded-lg flex items-center bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <FaPiggyBank className="text-yellow-300 mr-3" />
                            <a href="/vip" className="text-yellow-300">Banking</a>
                        </li>

                        <li className="py-3 px-4 rounded-lg flex items-center bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <FaStar className="text-yellow-300 mr-3" />
                            <a href="/vip" className="text-yellow-300">VIP</a>
                        </li>

                        <li className="relative py-3 px-4 rounded-lg flex flex-col bg-gray-800 hover:bg-gray-700 transition duration-300">
                            <div className="flex justify-start items-center w-full cursor-pointer" onClick={toggleSupport}>
                                <FaQuestionCircle className="text-yellow-300 mr-3"/>
                                <span className="text-yellow-300">Support</span>
                                <span className={`transition-transform duration-300 text-yellow-300 ml-auto ${supportOpen ? 'rotate-180' : ''}`}>▼</span>
                            </div>
                            {supportOpen && (
                                <ul className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                                    <li className="py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-200">
                                        <a href="/faq" className="text-gray-400">FAQ</a>
                                    </li>
                                    <li className="py-2 px-4 rounded-lg flex items-center hover:bg-gray-700 transition duration-200">
                                        <a href="/contact" className="text-gray-400">Contact Us</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default HeaderLogin;
