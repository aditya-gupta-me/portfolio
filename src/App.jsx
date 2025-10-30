import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  // Render the active tab component
  const renderActiveTab = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Mobile Navigation */}
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content */}
      <main className="flex-1 md:ml-48 px-6 py-8 md:px-16 md:py-16 mt-32 md:mt-0">
        <div className="max-w-3xl">{renderActiveTab()}</div>
      </main>
    </div>
  );
}

export default App;
