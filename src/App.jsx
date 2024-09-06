import React from 'react';
import Header from './component/Header'; // Import the Header component
import LandingPage from './component/LandingPage'; // Import the LandingPage component

function App() {
    return (
        <div className="app">
            <Header /> {/* Render the Header component */}
            <LandingPage /> {/* Render the LandingPage component below the Header */}
        </div>
    );
}

export default App;
