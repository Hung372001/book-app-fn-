import logo from './logo.svg';
import './Components/List/style.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes/Router';
import 'antd/dist/antd.css'; 
import DanhSach from './Pages/DanhSach';
function App() {
  return (
    <div className="App bg-[#f0f0f0]">
    
    <BrowserRouter>
    <Route  children={<DanhSach/>}>
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
