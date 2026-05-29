const skillGroups = [
  {
    title: "Software Engineering",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "REST APIs",
      "Component Architecture",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Design",
      "Accessibility",
      "Performance Optimization",
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Authentication",
      "Database Design",
      "Data Modeling",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Networking",
      "Cloud Security",
      "System Security",
      "Incident Response",
      "Security Fundamentals",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Figma",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 lg:py-24">
      <h2 className="mb-8 text-[15px] font-bold uppercase tracking-[0.18em] text-[#e6f1ff] lg:hidden">
        Skills
      </h2>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-[18px] font-medium text-[#e6f1ff]">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-[12px] font-medium text-[#64ffda] transition hover:bg-[#64ffda]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}