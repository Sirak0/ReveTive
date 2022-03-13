import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Scroll from "./Components/Scroll/Scroll";
import Services from "./Components/Services/Services";

function App() {
  return (
    <Router>
      <Header />
      <Scroll />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
