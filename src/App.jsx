import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Header from './component/Header'; //
// import LandingPage from './LandingPage.jsx';
import HeaderLogin from "./component/Login/HeaderLogin.jsx";
import Dashboard from "./component/Login/Dashboard.jsx";
// import Header from "./component/Header.jsx";

function App() {
    return (
        <Router>
            <div className="app">
                <HeaderLogin/> {/* Render the Header component */}
                <Routes>
                    <Route path="/" element={<Dashboard/>}/> {/* Landing Page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;


