import logo from './logo.svg';
import './Components/List/style.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App bg-[#f0f0f0]">
    <Navbar/>
    <Home/>
    <Footer/>

    </div>
  );
}

export default App;
