import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbeafe] via-[#e0e7ff] to-[#f0f4ff] text-zinc-900 px-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10 text-center border border-indigo-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
          Hello! I’m Jali Sathwika
        </h1>
        <p className="text-lg md:text-xl text-slate-700">
          I’m a 3rd-year B.Tech student in the Computer Science and Engineering
          department at KITSW. I have a strong interest in areas like web
          development, problem-solving, and learning new technologies. Over the
          past few semesters, I’ve been building my technical skills through
          coursework and small projects.
        </p>

        <a
          href="#!"
          className="mt-8 inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-medium px-6 py-3 rounded-full transition"
        >
          Know More
        </a>
      </div>
    </section>
  );
};

export default Hero;
