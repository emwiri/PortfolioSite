"use client";
import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiGit, SiGithub, SiTypescript } from "react-icons/si";

function CaseStudies() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-white mb-10"> My TechStack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#1B1B1B] p-6 rounded-2xl hover:scale-105 hover:shadow-[0_0_15px_#3F8E00] shadow-[0_0_15px_#729567]   transition duration-300"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-[#9C9C9C] font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
