import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { About, Contact, Home, Portfolio } from "./pages";
import { Themes } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
