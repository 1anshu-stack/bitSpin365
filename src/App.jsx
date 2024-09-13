import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'; // Import the Header component
import LandingPage from './component/LandingPage'; // Import the LandingPage component
import Signup from './Signup.jsx'; // Import the Signup component
import Login from './Login.jsx'; // Import the Login component

function App() {
    return (
        <Router>
            <div className="app">
                <Header /> {/* Render the Header component */}
                <Routes>
                    <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
                    <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
                    <Route path="/login" element={<Login />} /> {/* Login Page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;






















// import React from 'react';
// import Header from './component/Header'; // Import the Header component
// import LandingPage from './component/LandingPage'; // Import the LandingPage component
//
// function App() {
//     return (
//         <div className="app">
//             <Header /> {/* Render the Header component */}
//             <LandingPage /> {/* Render the LandingPage component below the Header */}
//         </div>
//     );
// }
//
// export default App;
