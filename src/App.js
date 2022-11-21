import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Comps/Hero";
import SolarInfo from "./Comps/solarInfo";
import AnnInfo from "./Comps/annInfo"
import "./index.css";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/solarinfo" element={<SolarInfo />} />
        <Route path="/anninfo" element={<AnnInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
