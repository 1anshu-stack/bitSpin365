import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'; // Import the Header component
import LandingPage from './component/LandingPage'; // Import the LandingPage component
import Signup from './component/Signup'; // Import the Signup component
import Login from './component/Login'; // Import the Login component


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}



function App() {
    return (
        <Router>
            <ErrorBoundary>
                <div className="app">
                    <Header /> {/* Render the Header component */}
                    <Routes>
                        <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
                        <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
                        <Route path="/login" element={<Login />} /> {/* Login Page */}
                    </Routes>
                </div>
            </ErrorBoundary>
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
