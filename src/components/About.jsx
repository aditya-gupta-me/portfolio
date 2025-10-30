import React from "react";

function About() {
  const resumeFolderUrl = import.meta.env.VITE_RESUME_FOLDER_URL;
  return (
    <div id="about-tab" className="tab-content px-4 sm:px-0">
      {/* Two-Column Section: Intro + Image */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
        {/* Left Column: Brief Intro  */}
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium mb-2">
              Hi, I'm <span className="text-black">Aditya Gupta</span>
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6"></div>

            {/* Download Resume Button */}
            <a
              href={
                resumeFolderUrl ||
                "https://drive.google.com/drive/folders/1WciHX-lo5PQ3fSjNdcLOrNvSq8hTm8uP?usp=sharing"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path>
                <path d="M12 17a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1z"></path>
                <path d="M18 21H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3 3 0 0 1-3 3z"></path>
              </svg>
              Download Resume
            </a>
          </div>

          <div className="space-y-6 text-black/50 leading-relaxed">
            <p>
              Master's of Computer Applications student at{" "}
              <span className="text-black/70">
                Vellore Institute of Technology, Vellore
              </span>{" "}
              with a passion for building full-stack applications and solving
              complex problems through code.
            </p>
          </div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="flex-shrink-0 md:sticky md:top-8 self-start">
          <img
            src="/PP.jpg"
            alt="Aditya Gupta"
            className="profile-picture w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl mx-auto"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
      </div>

      {/* Full-Width Section: About Me */}
      <div className="space-y-8">
        <div className="border-t border-black/10 pt-8">
          <h2 className="text-2xl font-medium mb-6">About Me</h2>
          <div className="space-y-6 text-black/50 leading-relaxed">
            <p>
              21 years old, Currently pursuing my Master's in Computer
              Applications after completing undergrad, Bachelor's of Computer
              Applications from{" "}
              <span className="text-black/70">
                Symbiosis International University
              </span>
              . My technical journey spans across web development (mainly in
              MERN), solving problems through algorithms, and competitive
              programming.
            </p>

            <p>
              I love solving problems, and I'm constantly tackling{" "}
              <span className="text-black/70">coding challenges</span> across
              various platforms like Codeforces, LeetCode, CodeChef to name
              some. I believe in continuous learning and pushing boundaries.
            </p>

            <p>
              Beyond coding, I have experience in video editing and team
              leadership, having led a video editing department and delivered
              high-quality educational content.
            </p>
            <h3 className="text-lg text-black/70">Hobbies</h3>
            <ol className="list-disc pl-5">
              <li>
                I enjoy playing badminton, especially love clearing sharp shots.
              </li>
              <li>
                Always curious about solving algorithm puzzles and logic
                challenges.
              </li>
              <li>
                Big fan of sci-fi content. One of my favorite movies is
                <em>Blade Runner 2049</em> — a visual masterpiece by Sir Roger
                Deakins.
              </li>
              <li>
                Enjoy experimenting with trendy tech and building side projects.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
