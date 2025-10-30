import React from "react";

function Experience() {
  return (
    <div id="experience-tab" className="tab-content px-4 sm:px-0">
      <div className="space-y-8">
        <h2 className="text-2xl mb-6">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Backend Engineer Intern */}
          <div className="border border-black/10 rounded-lg overflow-hidden bg-white transition-all hover:shadow-lg">
            <div className="overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
              <div className="w-full h-32 flex items-center justify-center text-5xl">
                💻
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-medium mb-1">
                  Backend Engineer | Intern
                </h3>
                <p className="text-sm text-black/40 mb-1">Aarvasa</p>
                <p className="text-xs text-black/30">
                  Oct 2025 – Present • Remote
                </p>
              </div>
              <ul className="space-y-2 text-black/50 leading-relaxed text-sm">
                <li>
                  • Engineering a GenAI-powered chatbot service using Langchain
                  and RAG to automate and improve response proficiency
                </li>
                <li>
                  • Actively contributing to a high-priority GenAI project,
                  applying new skills beyond core backend (Node.js)
                  responsibilities
                </li>
              </ul>
            </div>
          </div>

          {/* Video Editor Intern */}
          <div className="border border-black/10 rounded-lg overflow-hidden bg-white transition-all hover:shadow-lg">
            <div className="overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
              <div className="w-full h-32 flex items-center justify-center text-5xl">
                🎬
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-medium mb-1">
                  Video Editor Intern
                </h3>
                <p className="text-sm text-black/40 mb-1">Contour Education</p>
                <p className="text-xs text-black/30">
                  Aug 2022 – Jan 2023 • Australia • Remote
                </p>
              </div>
              <p className="text-black/50 leading-relaxed mb-3 text-sm">
                Worked remotely with an international team in Australia,
                optimizing educational videos to enhance student engagement and
                learning efficiency.
              </p>
              <ul className="space-y-2 text-black/50 leading-relaxed text-sm">
                <li>• Optimized educational videos by 35%</li>
                <li>
                  • Collaborated with cross-functional international teams
                </li>
                <li>• Maintained consistent quality standards</li>
              </ul>
            </div>
          </div>

          {/* Head of Video Editing (Intern) */}
          <div className="border border-black/10 rounded-lg overflow-hidden bg-white transition-all hover:shadow-lg">
            <div className="overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
              <div className="w-full h-32 flex items-center justify-center text-5xl">
                👥
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-medium mb-1">
                  Head of Video Editing (Intern)
                </h3>
                <p className="text-sm text-black/40 mb-1">
                  Youth India Foundation
                </p>
                <p className="text-xs text-black/30">
                  Dec 2021 – Feb 2022 • Pune • Remote
                </p>
              </div>
              <p className="text-black/50 leading-relaxed mb-3 text-sm">
                Managed editorial staff and coordinated the entire project
                lifecycle from assignment through completion and quality
                assurance.
              </p>
              <ul className="space-y-2 text-black/50 leading-relaxed text-sm">
                <li>
                  • Managed editorial staff through full project lifecycle
                </li>
                <li>
                  • Ensured quality assurance from assignment to completion
                </li>
                <li>
                  • Served as main liaison with IT department for technical
                  requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
