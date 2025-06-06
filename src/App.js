import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import RoomsPage from "./components/RoomsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;