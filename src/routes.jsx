// Import all necessary components and pages
import App from './App.jsx';
import Login from './pages/Login.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Signup from './pages/Signup.jsx';
import AddDetails from './pages/AddDetails.jsx';
import Dashboard from './component/Lobby/Dashboard.jsx';



// Define routes as an array
const routes = [
  {
    path: '/', // Root path
    element: <App />,
    children: [
      {
        path: '', // Default path (Landing Page)
        element: <LandingPage />,
      },
      {
        path: '/login', // Login page
        element: <Login />,
      },
      {
        path: '/signup', // Signup page
        element: <Signup />,
      },
      {
        path: '/add-details', // Add details form
        element: <AddDetails />,
      },
      {
        path: '/dashboard', // Dashboard page
        element: <Dashboard />,
      },
      {
        path: '*', // Catch-all route for undefined paths
        element: <div>404 - Page Not Found</div>,
      },
    ],
  },
];



export default routes;
