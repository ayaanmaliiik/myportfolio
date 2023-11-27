import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/myportfolio/' element={<Home/>}></Route>
        <Route path='/myportfolio/About' element={<About/>}></Route>
        <Route path='/myportfolio/Contact' element={<Contact/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
