import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './component/Header'; // Import the Header component
import LandingPage from './pages/LandingPage.jsx'; // Import the LandingPage component


function App() {
    return (
        <Router>
            <div className="app">
                <Header/> {/* Render the Header component */}
                <Routes>
                    <Route path="/" element={<LandingPage/>}/> {/* Landing Page */}
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
