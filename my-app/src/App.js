import "./Components/asset/css/style.css";
import "./Components/asset/css/responsive.css";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Camps from "./Components/Camps";
import Gallery from "./Components/Gallery";
import Spacialeties from "./Components/Spacialeties";
import Doctor from "./Components/Doctor";
import Contact from "./Components/Contact";
import Scroll from "./Components/Scrolltop";
import NoteState from "./Context/NotState";
import Memo from "./Components/Memo";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Scroll />
          <Header />
          <Navbar mode={mode} togglemode={togglemode} />
          <Routes>
            <Route index path="/" element={<Home mode={mode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/camp" element={<Camps />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/spac" element={<Spacialeties />} />
            <Route path="/doc" element={<Doctor />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Memo />
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
