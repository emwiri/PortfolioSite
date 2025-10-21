import React from "react";
import Courses from "./Courses";
import CaseStudies from "./CaseStudies";
import Journey from "./CaseStudies";
import ContactPage from "./GetinTouch";
import RecentWork from "./RecentWork";

function Main() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      {/* Hero Section */}
      <section id="home" className="scroll-mt-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-16">
          {/* Text Section */}
          <div className="text-center md:text-left mt-10 md:mt-0">
            <h1 className="font-extrabold text-4xl sm:text-5xl text-white">
              Amir
              <span className="text-[#3F8E00] pl-2">Nekoonam </span>
            </h1>

            <p className="text-[#9C9C9C] font-sans text-[15px] sm:text-base my-6 leading-relaxed max-w-md">
              Front-end is where logic meets creativity — and that’s where I
              thrive. I love solving problems, learning from documentation, and
              collaborating with teams.
            </p>

            <a
              href="#contact"
              className="inline-block bg-[#3F8E00] text-white font-sans py-3 px-8 rounded-lg mt-4 shadow hover:bg-[#4aa500] transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src="/1.JPG"
              alt="Amir Nekoonam"
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-2 border-[#3F8E00] p-2"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="scroll-mt-28">
        <Courses />
        <Journey />
      </section>

      {/* Recent Work */}
      <section id="recentwork" className="scroll-mt-28">
        <RecentWork />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28">
        <ContactPage />
      </section>
    </main>
  );
}

export default Main;
