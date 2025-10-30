import React from "react";

function MobileNav({ activeTab, setActiveTab, darkMode, toggleDarkMode }) {
  const tabs = [
    "about",
    "education",
    "projects",
    "skills",
    "experience",
    "resume",
    "contact",
  ];

  return (
    <div className="mobile-nav w-full p-6 pt-8 md:hidden fixed top-0 left-0 z-50 border-b border-black/5 dark:border-white/5">
      <div className="flex justify-between items-center mb-4">
        <nav className="flex gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`tab-button relative block text-left transition-colors ${
                activeTab === tab
                  ? "active text-black dark:text-white"
                  : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60"
              }`}
            >
              <span className="zigzag-underline relative z-10">{tab}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={toggleDarkMode}
          className="theme-toggle flex-shrink-0 hover:bg-black/5 dark:hover:bg-white/5"
          aria-label="Toggle dark mode"
        >
          <svg
            className={`w-5 h-5 ${darkMode ? "hidden" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            className={`w-5 h-5 ${darkMode ? "" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
