import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Vivek from "./pages/Vivek";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Vivek" element={<Vivek />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
