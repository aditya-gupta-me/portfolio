import React from "react";

function Resume() {
  // Drive links are now managed via Vite env variables for easy updates without code changes.
  // Set these in your .env file (must be prefixed with VITE_ for Vite to expose them):
  // VITE_RESUME_FOLDER_URL=https://drive.google.com/drive/folders/xxxxxxxxxxxxxxxx?usp=sharing
  // VITE_RESUME_FILE_ID=yyyyyyyyyyyyyyyyyyyyyyyy

  const resumeFolderUrl = import.meta.env.VITE_RESUME_FOLDER_URL;
  const resumeFileId = import.meta.env.VITE_RESUME_FILE_ID;

  // If you have a file ID, it will show preview, otherwise shows a message
  const resumeUrl = resumeFileId
    ? `https://drive.google.com/file/d/${resumeFileId}/preview`
    : null;

  return (
    <div id="resume-tab" className="tab-content px-4 sm:px-0">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Resume</h2>
          <a
            href={resumeFolderUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path>
              <path d="M8 11h8v2H8zM8 15h8v2H8zM8 7h3v2H8z"></path>
            </svg>
            Open in Drive
          </a>
        </div>

        {/* PDF Preview */}
        <div
          className="border border-black/10 rounded-lg overflow-hidden bg-white dark:bg-black/10"
          style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}
        >
          {resumeUrl ? (
            <iframe
              src={resumeUrl}
              className="w-full h-full"
              title="Resume Preview"
              frameBorder="0"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-black/20 dark:text-white/20 mb-4"
              >
                <path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path>
                <path d="M8 11h8v2H8zM8 15h8v2H8zM8 7h3v2H8z"></path>
              </svg>
              <h3 className="text-lg font-medium mb-2 text-black/70 dark:text-white/70">
                Resume Preview
              </h3>
              <p className="text-sm text-black/50 dark:text-white/50 mb-4 max-w-md">
                To enable inline preview, please add your specific resume file
                ID in Resume.jsx. For now, click "Open in Drive" above to view
                your resume.
              </p>
            </div>
          )}
        </div>

        <p className="text-sm text-black/50 dark:text-white/50 text-center">
          {resumeUrl
            ? 'Having trouble viewing? Click "Open in Drive" to view in a new tab.'
            : 'Click "Open in Drive" above to access your resume folder.'}
        </p>
      </div>
    </div>
  );
}

export default Resume;
