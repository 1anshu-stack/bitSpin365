import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header'; // Import the Header component
import LandingPage from './pages/LandingPage'; // Import the LandingPage component
import Signup from './pages/Signup'; // Import the Signup component
import Login from './pages/Login'; // Import the Login component
import AddDetails from './pages/AddDetails'; //import the AddDetails component
import Dashboard from './component/Lobby/Dashboard';


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
                        <Route path="/add-details" element={<AddDetails />} /> {/* AddDetails page} */}
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </ErrorBoundary>
        </Router>
    );
}

export default App;
