import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Signup from "./pages/Signup.jsx";
import AddDetails from "./pages/AddDetails.jsx";
import Dashboard from "./component/Lobby/Dashboard.jsx";



// Create a Query Client instance
const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            {path:'', element: <LandingPage />,},
            {path:'/login', element: <Login />,},
            {path:'/signup', element: <Signup />,},
            {path:'/add-details', element: <AddDetails />,},
            {path:'/dashboard', element: <Dashboard />,},
        ]
    },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);

