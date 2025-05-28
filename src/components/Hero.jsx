import React from "react";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-[#dbeafe] via-[#e0e7ff] to-[#f0f4ff] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
        {/* Left side - Text */}
        <div className="text-left max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 typing-animation">
            Hello! I’m Jali Sathwika
          </h1>

          <p className="text-lg md:text-xl text-slate-700 animate-fadeInUp delay-500">
            I’m a 3rd-year B.Tech student in the Computer Science and Engineering
            department at KITSW. I have a strong interest in web development,
            problem-solving, and learning new technologies. Over the past few
            semesters, I’ve been building my technical skills through coursework
            and small projects.
          </p>
        </div>

        {/* Right side - Animated Image */}
        <div className="mt-10 md:mt-0 md:ml-12 w-[300px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center animate-fadeInImage delay-700">
          <img
            src="https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM="
            alt="Professional woman"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CSS Styles */}
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blinkCaret {
          0%, 100% { border-color: transparent }
          50% { border-color: #4f46e5; }
        }

        .typing-animation {
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid #4f46e5;
          width: 0;
          animation: typing 3s steps(30, end) forwards, blinkCaret 0.75s step-end infinite;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }

        @keyframes fadeInImage {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInImage {
          animation: fadeInImage 1s ease-out forwards;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </>
  );
};

export default Hero;
