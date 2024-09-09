import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="py-16 px-4 text-center">
            <h3 className="text-3xl font-bold mb-10">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                    <div className="flex items-center justify-center mb-4">

                    </div>
                    <h4 className="text-xl font-bold mb-2">Secure Payments</h4>
                    <p>We guarantee fast, secure transactions, giving you peace of mind with every bet.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                    <div className="flex items-center justify-center mb-4">

                    </div>
                    <h4 className="text-xl font-bold mb-2">Exciting Games</h4>
                    <p>Choose from a wide variety of games, from poker to slots, and much more!</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700">
                    <div className="flex items-center justify-center mb-4">

                    </div>
                    <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
                    <p>We're here for you anytime, any day, to ensure your gaming experience is smooth.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
