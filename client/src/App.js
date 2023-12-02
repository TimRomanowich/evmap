import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Map from "./pages/Map";
import Home from "./pages/Home"
import Tour from "./pages/Tour"
import Reviews from "./pages/Reviews";
import Chargers from "./pages/Chargers"
import AddComment from "./pages/AddComment";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="Reviews" element={<Reviews />} />
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/chargers" element={<Chargers />} />
          <Route path="localhost:3001" /> 
          <Route path="AddComment" element={<AddComment />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;







