import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import RoomsPage from "./components/RoomsPage";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      {/* Додаємо ScrollToTop */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
