"use client";

import { useEffect, useState } from "react";

import SocialLinks from "./SocialLinks";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const currentlyBuilding = [
  "Shoe-In Kenya",
  "Mr Glitch Computers",
  "Cloud & Cybersecurity Skills",
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    function handleScroll() {
      const currentSection = navItems.find((item) => {
        const section = document.getElementById(item.id);

        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 180 && rect.bottom >= 180;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="w-full py-12 sm:py-16 lg:fixed lg:inset-y-0 lg:flex lg:w-[42%] lg:flex-col lg:justify-center lg:py-0">
      <div className="w-full max-w-xl lg:max-w-none">
        <a href="/" className="block">
          <h1 className="text-[34px] font-normal tracking-[-0.04em] text-[#e6f1ff] sm:text-[42px] md:text-[46px]">
            Clement Wanjihia
          </h1>

          <h2 className="mt-3 max-w-md text-[16px] font-normal leading-7 text-[#ccd6f6] sm:text-[18px]">
            Software Engineer & Cybersecurity Student
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-7 text-[#8892b0] sm:text-[16px]">
            I build digital products, ecommerce experiences, and secure systems
            that solve real business problems.
          </p>
        </a>

        <a
          href="/Clement-Wanjihia-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center rounded-lg border border-[#64ffda]/70 bg-[#64ffda]/5 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[#64ffda] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#64ffda]/10 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] sm:mt-8"
        >
          View Resume
        </a>

        <div className="mt-8 w-full max-w-sm overflow-hidden rounded-xl border border-[#233554] bg-[#112240]/40 shadow-[0_18px_45px_rgba(2,12,27,0.22)] backdrop-blur-sm sm:mt-10">
          <div className="border-b border-[#233554] px-4 py-3 sm:px-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64ffda] sm:text-[11px]">
              Currently Building
            </p>
          </div>

          <div className="space-y-3 p-4 sm:space-y-4 sm:p-5">
            {currentlyBuilding.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#64ffda] shadow-[0_0_12px_rgba(100,255,218,0.8)]" />

                <span className="text-[14px] leading-6 text-[#ccd6f6] sm:text-[15px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <nav className="mt-10 hidden lg:block">
          <ul className="space-y-3">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.22em] transition ${
                      isActive ? "text-[#e6f1ff]" : "text-[#8892b0]"
                    } hover:text-[#e6f1ff]`}
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive
                          ? "w-16 bg-[#e6f1ff]"
                          : "w-8 bg-[#8892b0] group-hover:w-16 group-hover:bg-[#e6f1ff]"
                      }`}
                    />

                    <span className="font-mono">
                      0{index + 1} {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <SocialLinks />
      </div>
    </aside>
  );
}