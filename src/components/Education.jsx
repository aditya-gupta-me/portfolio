import React from "react";

function Education() {
  return (
    <div id="education-tab" className="tab-content px-4 sm:px-0">
      <div className="space-y-8">
        <h2 className="text-2xl mb-6">Education</h2>

        <div className="space-y-6">
          {/* Master's Degree */}
          <div className="p-6 border border-black/10 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎓</div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">
                      Vellore Institute of Technology
                    </h3>
                    <div className="text-sm text-black/40">Vellore, India</div>
                  </div>
                  <div className="text-sm text-black/40 sm:text-right whitespace-nowrap">
                    July 2024 – July 2026
                  </div>
                </div>
                <div className="text-black/70 mb-2">
                  Master of Computer Applications (MCA)
                </div>
                <ul className="space-y-2 text-black/50 leading-relaxed list-disc list-inside">
                  <li>
                    Cumulative GPA:{" "}
                    <span className="text-black/70 font-medium">8.21</span>
                  </li>
                  <li>
                    Relevant Coursework: Data Structures & Algorithms,
                    Object-Oriented Programming, Database Management Systems,
                    Network and Communication, Cloud Computing, Cybersecurity,
                    Software Engineering
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="p-6 border border-black/10 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎓</div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">
                      Symbiosis International University
                    </h3>
                    <div className="text-sm text-black/40">Pune, India</div>
                  </div>
                  <div className="text-sm text-black/40 sm:text-right whitespace-nowrap">
                    Sep 2021 – July 2024
                  </div>
                </div>
                <div className="text-black/70 mb-2">
                  Bachelor of Computer Applications (BCA)
                </div>
                <ul className="space-y-2 text-black/50 leading-relaxed list-disc list-inside">
                  <li>
                    Cumulative GPA:{" "}
                    <span className="text-black/70 font-medium">7.77</span>
                  </li>
                  <li>
                    Relevant Coursework: Computational Thinking, Python, Shell
                    Scripting, Java, Operating System, DBMS, SQL, Design and
                    Implementation of Algorithms, IoT, Big Data Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
