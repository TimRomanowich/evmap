import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Map from "./pages/Map";
import Home from "./pages/Home"
import Tour from "./pages/Tour"
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="localhost:3002" />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;







