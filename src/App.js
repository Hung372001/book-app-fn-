import logo from './logo.svg';
import './Components/List/style.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Footer/>

    </div>
  );
}

export default App;
