import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<div >about</div>}></Route>
        <Route path="/my-travel" element={<div >travel</div>}></Route>
        <Route path="/contact" element={<div >contact</div>}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
     <Footer/> 
    </>
  )
}

export default App
