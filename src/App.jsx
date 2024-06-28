import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Prizes from "./pages/Prizes";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";

//import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Prizes" element={<Prizes />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
