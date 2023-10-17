import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {Layout,Typography,Space} from 'antd';
import Navbar from "./components/Navbar";
import News from "./components/News.js"
import Exchanges from "./components/Exchanges"
import Homepage from "./components/Homepage"
import Crypto from "./components/Crypto"
import Cryptocurrencies from "./components/Cryptocurrencies"
import Footer from "./components/footer";

function App() {
  
  return (
    <div className="app">
   
   
   <BrowserRouter>
  
  <div style={{display:"grid",gridTemplateColumns:"250px 1013px"}} >
  <Navbar/>
   
   <div className="  " style={{padding:"10px"}} >
   <Routes>
        <Route path="/exchanges" element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies count={50} name="cryptocurrencies"/>} />
        <Route path="/news" element={<News category={"Cryptocurrency" } count={50}/>} />
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/crypto/:coinId" element={<Crypto />} />
        <Route path="/coin/exchange/:coinId" element={<Exchanges />} />
      
        
    </Routes>
   </div>
   
  </div>
  
   
   
  
   
   <Footer/>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
