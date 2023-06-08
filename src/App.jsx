import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { useState, useEffect } from "react";
import ViewInvoice from "./Pages/ViewInvoice";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} isMobile={isMobile} />}
          />
          <Route
            path="/invoice"
            element={<ViewInvoice darkMode={darkMode} setDarkMode={setDarkMode} isMobile={isMobile} />}
          />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;