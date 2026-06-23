import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Homepage from "./content/Homepage.jsx";
import AboutUs from "./content/AboutUs.jsx";
import Courses from "./content/Courses.jsx";
import Enquire from "./content/Enquire.jsx";
import Apply from "./content/Apply.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/enquire" element={<Enquire />} />
                <Route path="/apply" element={<Apply />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;