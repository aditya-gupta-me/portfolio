import React from "react";

function Sidebar({ activeTab, setActiveTab, darkMode, toggleDarkMode }) {
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
    <aside className="w-48 flex-shrink-0 p-8 pt-16 fixed left-0 top-0 h-screen hidden md:block">
      <nav className="flex flex-col gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
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

      {/* Theme Toggle in Sidebar */}
      <div className="mt-8">
        <button
          onClick={toggleDarkMode}
          className="theme-toggle hover:bg-black/5 dark:hover:bg-white/5"
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
    </aside>
  );
}

export default Sidebar;
