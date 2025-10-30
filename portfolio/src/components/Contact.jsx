import React from "react";

function Contact() {
  return (
    <div id="contact-tab" className="tab-content px-4 sm:px-0">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ display: "inline" }}
            >
              <path d="m20.56,3.17c-.29-.2-.67-.23-.99-.08L2.57,11.1c-.35.17-.58.53-.57.92s.24.75.6.9l5.4,2.36v6.72l5.84-4.17,4.76,2.08c.13.06.26.08.4.08.18,0,.36-.05.52-.15.28-.17.46-.46.48-.79l1-15c.02-.35-.14-.69-.43-.89Zm-2.47,14.34l-5.21-2.28,3.12-6.23-7.65,4.25-2.93-1.28,13.47-6.34-.79,11.89Z"></path>
            </svg>
            Get In Touch
          </h2>
          <p className="text-black/50 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>

        {/* Primary Contact Links */}
        <div>
          <h3 className="text-lg mb-4 text-black/70">Connect With Me</h3>
          <div className="space-y-3 text-black/50">
            <div className="flex items-center gap-3">
              <span className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"></path>
                </svg>
              </span>
              <a
                href="mailto:aditya.gupta.leads@gmail.com"
                className="underline decoration-1 underline-offset-2 hover:text-black transition-colors"
              >
                aditya.gupta.leads@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </span>
              <a
                href="https://linkedin.com/in/aditya-gupta-irl"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-2 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <a
                href="https://github.com/aditya-gupta-me"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-2 hover:text-black transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="pt-6 border-t border-black/10">
          <h3 className="text-lg mb-4 text-black/70">
            Find Me on Other Platforms
          </h3>
          <div className="space-y-3 text-black/50">
            <div className="flex items-center gap-3">
              <span className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z"></path>
                  <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24"></path>
                </svg>
              </span>
              <a
                href="https://leetcode.com/u/the_adee/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-2 hover:text-black transition-colors"
              >
                LeetCode
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804zM7.582 17.8h8.055v-1.604H7.582zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452z"></path>
                </svg>
              </span>
              <a
                href="https://stackoverflow.com/users/19718063/haptic?tab=profile"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-2 hover:text-black transition-colors"
              >
                Stack Overflow
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl coding-icon-bg">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios/50/codechef.png"
                  alt="codechef"
                />
              </span>
              <a
                href="https://www.codechef.com/users/the_adee"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-2 hover:text-black transition-colors"
              >
                CodeChef
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl coding-icon-bg">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-codeforces-programming-competitions-and-contests-programming-community-logo-regular-tal-revivo.png"
                  alt="external-codeforces-programming-competitions-and-contests-programming-community-logo-regular-tal-revivo"
                />
              </span>
              <a
                href="https://codeforces.com/profile/the_adee"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-2 hover:text-black transition-colors"
              >
                Codeforces
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
