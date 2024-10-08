import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 about-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#84D4FC] via-[#5484C4] to-[#5484C4] bg-clip-text text-transparent animate-text-glow">
          About Me
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl opacity-80 mb-6 fadeIn">
          Full Stack Software Engineer building things hopefully useful to others.
        </p>
        <div className="text-left space-y-4 about-details">
          <p>🐊 I'm from West Monroe, Louisiana.</p>
          <p>💡 Stack agnostic, I believe once you understand the patterns common accross frameworks, you can build with anything.</p>
          <p>🔧 Creative problem-solver, always finding a way to get things done.</p>
          <p>🎓 Studied Computer Science at Louisiana Delta Community College.</p>
          <p>📖 Life long learner, curious about everything in the cosmos.</p>
        </div>
      </div>
      <div className='flex width-screen justify-center align-center m-6 mt-12'>
        <button
          onClick={() => window.location.href="https://github.com/Oia20"}
          className="m-2 inline-block bg-[#4770D6] hover:bg-[#537A9D] text-white text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 hover:curser-pointer">
            Github
        </button>
        <button
          onClick={() => window.location.href="https://www.linkedin.com/in/jacob-dement-35658b275/"}
          className="m-2 inline-block bg-[#4770D6] hover:bg-[#537A9D] text-white text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 hover:curser-pointer">
            LinkedIn
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
