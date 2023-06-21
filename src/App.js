import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DeliveryForm from "./pages/DeliverForm";
import CargoStatusPage from "./pages/CargoStatusPage";
import Hero from "./pages/Hero";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="mother">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/deliver" element={<DeliveryForm />} />
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/cargo-status" element={<CargoStatusPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
