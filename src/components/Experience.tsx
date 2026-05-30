const experiences = [
  {
    period: "2025 — Present",
    role: "Founder & Software Engineer",
    company: "Shoe-In Kenya",
    description:
      "Leading the digital growth of Shoe-In Kenya by building and improving the ecommerce platform, customer experience, product presentation, and online sales infrastructure.",
    achievements: [
      "Built and launched a production ecommerce platform.",
      "Improved mobile shopping experience and responsiveness.",
      "Implemented SEO-focused product content and structure.",
      "Created scalable foundations for digital marketing and growth.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Vercel",
    ],
  },
  {
    period: "2025 — Present",
    role: "Software Engineer",
    company: "Independent Projects",
    description:
      "Designing and developing modern websites, ecommerce platforms, and digital products for businesses and personal brands.",
    achievements: [
      "Built responsive web applications with React and Next.js.",
      "Developed reusable component systems and scalable layouts.",
      "Integrated modern backend services using Supabase.",
      "Delivered production-ready projects with a focus on usability.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    period: "2025 — Present",
    role: "Cybersecurity Student",
    company: "Continuous Learning",
    description:
      "Actively studying cybersecurity with a focus on networking, cloud security, secure systems, and practical security principles.",
    achievements: [
      "Building a foundation in networking and system security.",
      "Learning cloud security concepts and best practices.",
      "Exploring incident response and security operations.",
      "Applying security-first thinking to software projects.",
    ],
    technologies: [
      "Networking",
      "Cloud Security",
      "Linux",
      "System Security",
      "Incident Response",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 lg:py-24">
      <h2 className="mb-8 text-[15px] font-bold uppercase tracking-[0.18em] text-[#e6f1ff] lg:hidden">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="group rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-[#233554] hover:bg-[#112240]/40"
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#64ffda]">
              {experience.period}
            </p>

            <h3 className="mt-3 text-[20px] font-medium text-[#e6f1ff] transition group-hover:text-[#64ffda]">
              {experience.role}
            </h3>

            <p className="mt-1 text-[15px] text-[#ccd6f6]">
              {experience.company}
            </p>

            <p className="mt-4 text-[15px] leading-7 text-[#8892b0]">
              {experience.description}
            </p>

            <ul className="mt-5 space-y-3">
              {experience.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-3 text-[14px] leading-6 text-[#8892b0]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64ffda]" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-[12px] font-medium text-[#64ffda]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}