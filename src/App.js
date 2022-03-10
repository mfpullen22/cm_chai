import './App.css';
import Navbar from './components/navbar';
import {Route, Routes} from "react-router";
import Home from "./components/home";
import Guidelines from "./components/guidelines";
import Map from "./components/map";
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Guidelines" element={<Guidelines />} />
        <Route path="Map" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
