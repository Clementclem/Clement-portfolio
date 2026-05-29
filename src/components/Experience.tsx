const experiences = [
  {
    period: "2025 — PRESENT",
    role: "Founder & Software Engineer",
    company: "Shoe-In Kenya",
    description:
      "Built and launched a production ecommerce platform for a men’s footwear brand, combining software engineering, product strategy, SEO, and real business operations.",
    highlights: [
      "Designed and developed the customer-facing shopping experience.",
      "Structured product pages for better discovery, trust, and conversion.",
      "Added SEO-focused product content for local Kenyan search visibility.",
      "Improved mobile responsiveness for customers browsing on phones.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Vercel"],
  },
  {
    period: "2025 — PRESENT",
    role: "Software Engineer",
    company: "Independent Projects",
    description:
      "Building production-ready websites, ecommerce platforms, admin dashboards, and content systems for real-world business and personal brand use cases.",
    highlights: [
      "Developed responsive interfaces with clean component architecture.",
      "Built admin-ready workflows for products, content, and dashboards.",
      "Integrated Supabase-backed data flows for dynamic applications.",
      "Deployed modern web applications through Vercel.",
    ],
    technologies: ["React", "Next.js", "Supabase", "Vercel", "UI Systems"],
  },
  {
    period: "2026 — PRESENT",
    role: "Cybersecurity Student",
    company: "Personal Learning Path",
    description:
      "Studying practical cybersecurity foundations alongside software engineering, with a focus on secure systems and cloud-aware development.",
    highlights: [
      "Learning networking, cloud security, and incident response fundamentals.",
      "Applying security thinking to web applications and backend systems.",
      "Building stronger awareness around authentication, access control, and deployment safety.",
    ],
    technologies: ["Security", "Networking", "Cloud", "Systems", "Incident Response"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 lg:py-24">
      <h2 className="mb-8 text-[15px] font-bold uppercase tracking-[0.18em] text-[#e6f1ff] lg:hidden">
        Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="group relative grid gap-4 rounded-md transition-all duration-200 hover:bg-[#112240]/60 hover:shadow-[0_18px_40px_rgba(2,12,27,0.35)] sm:grid-cols-[140px_1fr] sm:p-5"
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
              {experience.period}
            </p>

            <div>
              <h3 className="text-[16px] font-medium leading-snug text-[#e6f1ff] transition group-hover:text-[#64ffda]">
                {experience.role} · {experience.company}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#8892b0]">
                {experience.description}
              </p>

              <ul className="mt-4 space-y-2 text-[14px] leading-6 text-[#8892b0]">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64ffda]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-[12px] font-medium leading-5 text-[#64ffda]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}