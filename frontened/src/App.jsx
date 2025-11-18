import HomePage from "./home/HomePage";
import Navbar from "./Navbar/Nav";
import "./App.css";
import Services from "./service/service";
import About from "./about/about";
import HireMe from "./hireme/hireme";
import Contact from "./contact/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hireme" element={<HireMe />} />
      </Routes>
    </Router>
  );
}

export default App;
