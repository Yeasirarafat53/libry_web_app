import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Contact from "./Components/Contact/Contact";
import Booking from "./Components/Booking/Booking";
import About from "./Components/About/About";
import Header from "./Components/Home/Header/Header";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
