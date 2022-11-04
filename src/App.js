import logo from './logo.svg';
import './Components/List/style.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes/Router';
function App() {
  return (
    <div className="App bg-[#f0f0f0]">
    
    <BrowserRouter>
    <Route>
    <div>
          <Navbar  />
          <div className="">
            <div className="main">
              <Routes />
            </div>{" "}
          </div>{" "}
          <Footer />
        </div>
    </Route>
    
        
  
  
  </BrowserRouter>
  </div>
  );
}

export default App;
