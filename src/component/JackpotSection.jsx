import React from 'react';
import { motion } from 'framer-motion';

const JackpotSection = () => {
    const jackpotAnimation = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
        transition: { type: 'spring', stiffness: 100, duration: 0.5 },
    };

    const numberAnimation = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
            },
        },
    };

    return (
        <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-black py-16 px-6 text-center">
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={jackpotAnimation.transition}
                    className="mb-12"
                >
                    <h3 className="text-4xl font-bold text-yellow-400">
                        Jackpotz Mania
                    </h3>
                    <p className="text-lg text-gray-300 mt-4">
                        Play the spins for a chance to win one of the BitSpin Jackpots!
                    </p>
                </motion.div>

                {/* Jackpot Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Mega Jackpot */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={jackpotAnimation.transition}
                        className="bg-purple-800 rounded-lg p-6 text-white shadow-lg"
                    >
                        <h4 className="text-2xl font-bold text-yellow-500">
                            Mega Jackpot
                        </h4>
                        <motion.div
                            {...numberAnimation}
                            className="text-5xl font-extrabold mt-4 text-yellow-300"
                        >
                            $114,408.66
                        </motion.div>
                    </motion.div>

                    {/* Minor Jackpot */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={jackpotAnimation.transition}
                        className="bg-purple-800 rounded-lg p-6 text-white shadow-lg"
                    >
                        <h4 className="text-2xl font-bold text-green-500">
                            Minor Jackpot
                        </h4>
                        <motion.div
                            {...numberAnimation}
                            className="text-5xl font-extrabold mt-4 text-green-300"
                        >
                            $131.50
                        </motion.div>
                    </motion.div>

                    {/* JPM Race */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={jackpotAnimation.transition}
                        className="bg-purple-800 rounded-lg p-6 text-white shadow-lg"
                    >
                        <h4 className="text-2xl font-bold text-blue-500">
                            JPM Race
                        </h4>
                        <motion.div
                            {...numberAnimation}
                            className="text-5xl font-extrabold mt-4 text-blue-300"
                        >
                            $25,000
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JackpotSection;
