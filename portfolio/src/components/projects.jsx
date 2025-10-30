import React from "react";

function Projects() {
  return (
    <div id="projects-tab" className="tab-content px-4 sm:px-0">
      <div className="space-y-8">
        <h2 className="text-2xl mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CodeHat Project */}
          <div className="project-card border border-black/10 rounded-lg overflow-hidden bg-white transition-all hover:shadow-lg">
            <div className="overflow-hidden">
              <img
                src="/Code_Editor.png"
                alt="CodeHat Preview"
                className="project-thumbnail w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-medium mb-2">CodeHat</h3>
                <p className="text-sm text-black/40">
                  Full-stack online coding platform
                </p>
              </div>
              <p className="text-black/50 leading-relaxed mb-4 text-sm">
                A comprehensive coding platform with an integrated code editor
                designed to eliminate context switching for new coders. Reduced
                execution latency by 30% through optimized backend architecture.
              </p>
              <div className="text-xs text-black/40 mb-4">
                React • Express • Node.js • Firebase • MongoDB
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/aditya-gupta-me/CodeHat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black transition-colors"
                  title="GitHub Repository"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                  </svg>
                </a>
                <a
                  href="https://code-hat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black transition-colors"
                  title="Live Demo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* HeyDoc Project */}
          <div className="project-card border border-black/10 rounded-lg overflow-hidden bg-white transition-all hover:shadow-lg">
            <div className="overflow-hidden">
              <img
                src="/Screen_1.png"
                alt="HeyDoc! Preview"
                className="project-thumbnail w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-medium mb-2">HeyDoc!</h3>
                <p className="text-sm text-black/40">
                  AI-powered health consultation mobile app
                </p>
              </div>
              <p className="text-black/50 leading-relaxed mb-4 text-sm">
                React Native application enabling users to log health data, book
                appointments, and track symptoms. Implements Naive Bayes
                classNameification for intelligent disease prediction.
              </p>
              <div className="text-xs text-black/40 mb-4">
                React Native • Strapi • Clerk • Cloudinary
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/aditya-gupta-me/heydoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black transition-colors"
                  title="GitHub Repository"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Transform Crypt Project */}
          <div className="project-card border border-black/10 rounded-lg overflow-hidden bg-white transition-all hover:shadow-lg">
            <div className="overflow-hidden">
              <div className="w-full h-50 flex items-center justify-center text-6xl">
                <img
                  src="/transform_crypt.png"
                  className="project-thumbnail w-full h-48 object-cover"
                  alt="transform-crypt"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-medium mb-2">Transform Crypt</h3>
                <p className="text-sm text-black/40">
                  Custom encryption system with geometric transformations
                </p>
              </div>
              <p className="text-black/50 leading-relaxed mb-4 text-sm">
                Lightweight Python encryption package using coordinate-based
                mapping, rotation, shear, and reflection transformations.
                Features system-generated keys with Fernet-based symmetric
                encryption for secure text encryption.
              </p>
              <div className="text-xs text-black/40 mb-4">
                Python • Cryptography • Fernet • HTML
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/aditya-gupta-me/transform-crypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black transition-colors"
                  title="GitHub Repository"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sumnote.ai Project */}
          <div className="project-card border border-black/10 rounded-lg overflow-hidden bg-white transition-all hover:shadow-lg">
            <div className="overflow-hidden">
              <div className="w-full h-48 flex items-center justify-center text-6xl">
                <img
                  src="/sumnote_ai.png"
                  alt="Sumnote.ai - AI-powered meeting notes summarizer application screenshot"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-medium mb-2">Sumnote.ai</h3>
                <p className="text-sm text-black/40">
                  AI-powered meeting notes summarizer
                </p>
              </div>
              <p className="text-black/50 leading-relaxed mb-4 text-sm">
                Production-ready application for intelligent meeting notes
                summarization using Groq API (specifically llama3-1). Features
                file upload, text input, AI summarization, email sharing with
                HTML formatting, and a modern responsive UI. Built with React
                and TypeScript.
              </p>
              <div className="text-xs text-black/40 mb-4">
                React • TypeScript • Vite • Groq API • Node.js
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/aditya-gupta-me/Sumnote.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black transition-colors"
                  title="GitHub Repository"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                  </svg>
                </a>
                <a
                  href="https://sumnote-ai.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-black transition-colors"
                  title="Live Demo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-5 h-5"
                  >
                    <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
