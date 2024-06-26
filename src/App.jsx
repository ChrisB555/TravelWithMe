import './App.css';
import{Route, Routes} from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CitiesRegions from "./components/MainHome/CitiesRegions/CitiesRegions";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
     
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={< About/>}></Route>
        <Route path="/my-travel/:country/:cityOrRegion" element={<CitiesRegions/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       
        <Route path="/explore/:country/:id" element={<Explore />}></Route>
      </Routes>
     <Footer/> 
    </>
  )
}

export default App
