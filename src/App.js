import logo from './logo.svg';
import './Components/List/style.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
