import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import ReportItem from './components/ReportItem';
import FoundItem from './components/FoundItem';
import Contact from './components/Contact';
import About from './components/About';
import MyReports from './components/MyReports';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lost-items" element={<ReportItem />} />
        <Route path="/found-items" element={<FoundItem/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-reports" element={<MyReports />} />
      </Routes>
    </>
  );
}

export default App;