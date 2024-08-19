import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContactBanner from "./components/contact/ContactBanner";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import ContactPage from "./components/pages/ContactPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import SinglePageOfProject from "./components/pages/SinglePageOfProject";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-easybuild" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<SinglePageOfProject />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ContactBanner />
        <Footer />
        {/* Scroll-to-Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "40px",
              right: "6px",
              backgroundColor: "#DD4624", // Dark blue background color
              color: "#ffffff", // White text color
              border: "none",
              borderRadius: "0",
              padding: "4px 12px",
              cursor: "pointer",
              fontSize: "20px",
              zIndex: 1000,
            }}
          >
            ↑
          </button>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
