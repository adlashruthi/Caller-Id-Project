import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/home/home";
import Shadow from "./components/CallerId/shadow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<Shadow />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
