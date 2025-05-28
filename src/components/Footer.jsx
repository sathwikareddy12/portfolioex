import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">Let's Connect!</h2>
          <p className="mt-2 text-gray-600">Feel free to reach out through any of the platforms below.</p>

          <div className="flex justify-center mt-6 space-x-5">
            <a
              href="https://github.com/sathwikareddy12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
              title="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.082-.729.082-.729 1.204.086 1.837 1.24 1.837 1.24 1.07 1.832 2.809 1.303 3.495.997.108-.774.418-1.303.762-1.603-2.665-.305-5.467-1.334-5.467-5.934 0-1.312.47-2.384 1.236-3.224-.124-.303-.535-1.527.118-3.18 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.005-.404c1.02.005 2.045.137 3.004.404 2.29-1.553 3.295-1.23 3.295-1.23.655 1.653.245 2.877.12 3.18.77.84 1.235 1.912 1.235 3.224 0 4.61-2.807 5.625-5.48 5.922.43.372.813 1.102.813 2.222v3.293c0 .32.217.694.825.576A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/jali sathwika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition"
              title="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.849-3.036-1.852 0-2.135 1.445-2.135 2.94v5.665h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.604 0 4.268 2.371 4.268 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.069 0-1.143.925-2.069 2.069-2.069 1.143 0 2.069.926 2.069 2.069 0 1.142-.926 2.069-2.069 2.069zM6.785 20.452H3.888V9h2.897v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.205 24 24 23.226 24 22.271V1.729C24 .774 23.205 0 22.225 0z"
                />
              </svg>
            </a>

            <a
              href="mailto:youremail@example.com"
              className="text-gray-600 hover:text-red-500 transition"
              title="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12a2 2 0 002 2h16a2 2 0 002-2V6c0-1.1-.9-2-2-2zm-1.4 3L12 13 5.4 7h13.2zM4 18V8.5l7.6 6.5a1 1 0 001.3 0L20 8.5V18H4z" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Engineered by jali sathwika reddy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
