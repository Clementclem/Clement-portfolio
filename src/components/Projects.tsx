import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const featuredProject = {
  title: "Shoe-In Kenya",
  subtitle: "Production Ecommerce Platform",
  description:
    "A live ecommerce website for a men’s footwear brand in Kenya. I designed and built the shopping experience, product presentation, SEO structure, mobile responsiveness, and business-focused content to support real customer purchases.",
  image: "/projects/shoe-in.jpg",
  problem:
    "Shoe-In needed a stronger digital home beyond social media, where customers could browse products clearly and trust the brand.",
  solution:
    "I built a responsive ecommerce experience with clear product presentation, mobile-first layouts, SEO-friendly content, and a professional brand feel.",
  impact:
    "The site now gives the business a credible online presence and a foundation for paid ads, search traffic, and scalable digital sales.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Vercel"],
  liveUrl: "https://shoeinkenya.co.ke",
  githubUrl: "#",
};

const otherProjects = [
  {
    title: "Mr Glitch Computers",
    description:
      "An electronics ecommerce platform for laptops, monitors, and accessories with product categories, admin dashboard structure, and Supabase-powered backend workflows.",
    image: "/projects/mr-glitch.jpg",
    achievement:
      "Built a scalable Next.js and Supabase architecture for product management, responsive browsing, and future admin operations.",
    technologies: ["Next.js", "Supabase", "Vercel", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Joseph Njogu Portfolio",
    description:
      "A personal brand website for a business architect, team-building expert, and pastor with resources, media sections, and a content-ready structure.",
    image: "/projects/joseph-njogu.jpg",
    achievement:
      "Created a clean brand platform that communicates multiple professional identities while keeping the user experience simple and focused.",
    technologies: ["React", "Supabase", "UI Design", "Content Systems"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 lg:py-24">
      <h2 className="mb-8 text-[15px] font-bold uppercase tracking-[0.18em] text-[#e6f1ff] lg:hidden">
        Projects
      </h2>

      <div className="mb-12">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#64ffda]">
          Featured Project
        </p>

        <h3 className="mt-3 text-[30px] font-normal tracking-[-0.03em] text-[#e6f1ff]">
          {featuredProject.title}
        </h3>
      </div>

      <article className="group rounded-xl border border-transparent p-0 transition-all duration-300 hover:border-[#233554] hover:bg-[#112240]/40 sm:p-5">
        <a
          href={featuredProject.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <div className="relative overflow-hidden rounded-lg border border-[#233554] bg-[#112240]">
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              width={900}
              height={560}
              className="h-auto w-full object-cover opacity-85 grayscale transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        </a>

        <div className="mt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#64ffda]">
                {featuredProject.subtitle}
              </p>

              <h4 className="mt-2 text-[22px] font-medium leading-snug text-[#e6f1ff] transition group-hover:text-[#64ffda]">
                {featuredProject.title}
              </h4>
            </div>

            <div className="flex shrink-0 items-center gap-3 text-[19px] text-[#8892b0]">
              <a
                href={featuredProject.githubUrl}
                aria-label={`${featuredProject.title} GitHub`}
                className="transition hover:text-[#64ffda]"
              >
                <FaGithub />
              </a>

              <a
                href={featuredProject.liveUrl}
                aria-label={`${featuredProject.title} Live Site`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#64ffda]"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>

          <p className="mt-4 text-[15px] leading-7 text-[#8892b0]">
            {featuredProject.description}
          </p>

          <div className="mt-6 grid gap-4">
            {[
              ["Problem", featuredProject.problem],
              ["Solution", featuredProject.solution],
              ["Impact", featuredProject.impact],
            ].map(([label, text]) => (
              <div
                key={label}
                className="rounded-lg border border-[#233554] bg-[#0a192f]/40 p-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#64ffda]">
                  {label}
                </p>

                <p className="mt-2 text-[14px] leading-6 text-[#8892b0]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {featuredProject.technologies.map((technology) => (
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

      <div className="mt-16">
        <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.18em] text-[#64ffda]">
          Other Projects
        </p>

        <div className="space-y-5">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="group grid gap-5 rounded-xl border border-transparent transition-all duration-300 hover:border-[#233554] hover:bg-[#112240]/40 sm:grid-cols-[160px_1fr] sm:p-5"
            >
              <div className="relative overflow-hidden rounded-md border border-[#233554] bg-[#112240]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={360}
                  height={220}
                  className="h-full min-h-[120px] w-full object-cover opacity-80 grayscale transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[17px] font-medium leading-snug text-[#e6f1ff] transition group-hover:text-[#64ffda]">
                    {project.title}
                  </h3>

                  <div className="flex shrink-0 items-center gap-3 text-[18px] text-[#8892b0]">
                    <a
                      href={project.githubUrl}
                      aria-label={`${project.title} GitHub`}
                      className="transition hover:text-[#64ffda]"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.liveUrl}
                      aria-label={`${project.title} Live Site`}
                      className="transition hover:text-[#64ffda]"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <p className="mt-3 text-[15px] leading-7 text-[#8892b0]">
                  {project.description}
                </p>

                <div className="mt-4 rounded-lg border border-[#233554] bg-[#0a192f]/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#64ffda]">
                    Key Achievement
                  </p>

                  <p className="mt-2 text-[14px] leading-6 text-[#8892b0]">
                    {project.achievement}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
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
      </div>
    </section>
  );
}