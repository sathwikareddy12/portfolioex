import React from "react";

const Education = () => {
  return (
    <section className="bg-gradient-to-br from-[#f3f4f6] via-[#fefefe] to-[#eaeaea]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-16">
        {/* Education Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            My Educational Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A quick overview of my academic background and achievements across key milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {/* B.Tech */}
          <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-center w-14 h-14 mx-auto bg-indigo-100 text-indigo-700 font-bold rounded-full text-xl shadow-sm">
              1
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              B.Tech - Computer Science
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Pursuing B.Tech in Computer Science at KITS Warangal. Current CGPA: 9.41 (up to 4th semester).
            </p>
          </div>

          {/* Intermediate */}
          <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-center w-14 h-14 mx-auto bg-indigo-100 text-indigo-700 font-bold rounded-full text-xl shadow-sm">
              2
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Intermediate
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Completed MPC at Kakatiya Junior College with 97.2%.
            </p>
          </div>

          {/* School */}
          <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-center w-14 h-14 mx-auto bg-indigo-100 text-indigo-700 font-bold rounded-full text-xl shadow-sm">
              3
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Schooling
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Completed SSC at SPR School with a perfect GPA of 10/10.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-indigo-800">
              My Projects
            </h2>
            <p className="mt-4 text-lg text-indigo-600">
              A selection of personal projects that showcase my development skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2">
            {/* Netflix Clone */}
            <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-center w-14 h-14 mx-auto bg-indigo-100 text-indigo-700 font-bold rounded-full text-xl shadow-sm">
                🎬
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Netflix Clone
              </h3>
              <p className="mt-3 text-base text-gray-600">
                A responsive Netflix clone built using React and Firebase. Includes user login and movie streaming UI powered by the TMDB API.
              </p>
            </div>

            {/* Notes App */}
            <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-center w-14 h-14 mx-auto bg-indigo-100 text-indigo-700 font-bold rounded-full text-xl shadow-sm">
                📝
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Online Notes App
              </h3>
              <p className="mt-3 text-base text-gray-600">
                A note-taking app built in React. Users can create, edit, and delete notes with data saved using localStorage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Certifications & Achievements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Recognitions and experiences that shaped my technical and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            {/* SIH Hackathon */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-14 h-14 mx-auto bg-green-100 text-green-700 font-bold rounded-full text-xl">
                💡
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                SIH Hackathon
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Participated in Smart India Hackathon, collaborating on innovative solutions to real-world problems.
              </p>
            </div>

            {/* Internshala */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-14 h-14 mx-auto bg-blue-100 text-blue-700 font-bold rounded-full text-xl">
                🌐
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Web Dev Internship
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Completed a web development internship via Internshala, gaining hands-on experience in frontend technologies.
              </p>
            </div>

            {/* Basketball */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-14 h-14 mx-auto bg-yellow-100 text-yellow-700 font-bold rounded-full text-xl">
                🏀
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Basketball Nationals
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Represented at the national level in basketball — showcasing teamwork, discipline, and sportsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
