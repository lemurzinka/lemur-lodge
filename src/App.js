import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import RoomsPage from "./components/RoomsPage";


function App() {
  return (
    <BrowserRouter basename="/lemur-lodge">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;