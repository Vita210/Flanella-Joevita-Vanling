import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import DesignsPage from "./pages/DesignPage";

/** Scroll ke #section saat URL berubah, misalnya /#about */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/design" element={<DesignsPage />} />
        </Routes>
      </main>
    </>
  );
}
