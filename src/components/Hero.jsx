import React from "react";

const Hero = () => {
  return (
    <section className="ezy__header25 light min-h-screen flex items-center justify-center bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1] px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 text-center border dark:border-gray-700">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hello!! I am Jali Sathwika
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          I’m J Sathwika, a 3rd-year B.Tech student in the Computer Science and
          Engineering department at KITSW. I have a strong interest in areas
          like web development, problem-solving, and learning new technologies.
          Over the past few semesters, I’ve been building my technical skills
          through coursework and small projects.
        </p>

        <a
          href="#!"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded transition"
        >
          Know more..
        </a>
      </div>
    </section>
  );
};

export default Hero;
