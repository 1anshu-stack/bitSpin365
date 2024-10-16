
import { Outlet } from 'react-router-dom';
import Header from './component/Header'; // Import the Header component
import Footer from "./component/Footer.jsx";

function App() {
    return (
       <>
           <Header/>
           <Outlet/>
           <Footer/>
       </>
    );
}

export default App;