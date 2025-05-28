import React from "react";

const Education = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-[#f3f4f6] via-[#fefefe] to-[#eaeaea]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-16">

          {/* Education Section */}
          <div className="max-w-2xl mx-auto text-center mb-16 fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 hover:text-indigo-600 transition duration-300">
              My Educational Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600 hover:text-gray-800 transition">
              A quick overview of my academic background and achievements across key milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            {[
              {
                title: "B.Tech - Computer Science",
                desc: "Pursuing B.Tech in Computer Science at KITS Warangal. Current CGPA: 9.41 (up to 4th semester).",
              },
              {
                title: "Intermediate",
                desc: "Completed MPC at Kakatiya Junior College with 97.2%.",
              },
              {
                title: "Schooling",
                desc: "Completed SSC at SPR School with a perfect GPA of 10/10.",
              },
            ].map((edu, i) => (
              <div
                key={i}
                className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl fade-in"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-14 h-14 mx-auto bg-indigo-100 text-indigo-700 font-bold rounded-full text-xl shadow-sm">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-800 hover:text-indigo-600 transition">
                  {edu.title}
                </h3>
                <p className="mt-3 text-base text-gray-600">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-indigo-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-16 fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold text-indigo-800 hover:text-indigo-600 transition duration-300">
                My Projects
              </h2>
              <p className="mt-4 text-lg text-indigo-600 hover:text-indigo-800 transition">
                A selection of personal projects that showcase my development skills and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2">
              {[
                {
                  icon: "🎬",
                  title: "Netflix Clone",
                  desc: "A responsive Netflix clone built using React and Firebase. Includes user login and movie streaming UI powered by the TMDB API.",
                },
                {
                  icon: "📝",
                  title: "Online Notes App",
                  desc: "A note-taking app built in React. Users can create, edit, and delete notes with data saved using localStorage.",
                },
              ].map((proj, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl fade-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="flex items-center justify-center w-14 h-14 mx-auto bg-indigo-100 text-indigo-700 font-bold rounded-full text-xl">
                    {proj.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-800 hover:text-indigo-600 transition">
                    {proj.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-16 fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 hover:text-indigo-600 transition duration-300">
                Certifications & Achievements
              </h2>
              <p className="mt-4 text-lg text-gray-600 hover:text-gray-800 transition">
                Recognitions and experiences that shaped my technical and personal growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
              {[
                {
                  icon: "💡",
                  title: "SIH Hackathon",
                  desc: "Participated in Smart India Hackathon, collaborating on innovative solutions to real-world problems.",
                  bg: "bg-green-100",
                  text: "text-green-700",
                },
                {
                  icon: "🌐",
                  title: "Web Dev Internship",
                  desc: "Completed a web development internship via Internshala, gaining hands-on experience in frontend technologies.",
                  bg: "bg-blue-100",
                  text: "text-blue-700",
                },
                {
                  icon: "🏀",
                  title: "Basketball Nationals",
                  desc: "Represented at the national level in basketball — showcasing teamwork, discipline, and sportsmanship.",
                  bg: "bg-yellow-100",
                  text: "text-yellow-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transform transition duration-300 fade-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className={`flex items-center justify-center w-14 h-14 mx-auto ${item.bg} ${item.text} font-bold rounded-full text-xl`}>
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-800 hover:text-indigo-600 transition">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .fade-in:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </>
  );
};

export default Education;
