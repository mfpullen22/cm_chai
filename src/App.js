import './App.css';
import Navbar from './components/navbar';
import {Route, Routes} from "react-router";
import Home from "./components/home";
import Guidelines from "./components/guidelines";
import Map from "./components/map";
import Footer from './components/footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



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
