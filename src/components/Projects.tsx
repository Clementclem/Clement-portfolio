import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const featuredProject = {
  title: "Shoe-In Kenya",
  subtitle: "Production Ecommerce Platform",
  description:
    "A live ecommerce website for a men’s footwear brand. I designed and built the shopping experience, product presentation, SEO structure, mobile responsiveness, and business-focused content to support real customer purchases.",
  image: "/projects/shoe-in.jpg",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Vercel"],
  liveUrl: "https://shoeinkenya.co.ke",
  githubUrl: "#",
};

const otherProjects = [
  {
    title: "Mr Glitch Computers",
    description:
      "A laptop and monitor ecommerce platform with product categories, admin dashboard structure, Supabase backend, and responsive product experiences.",
    image: "/projects/mr-glitch.jpg",
    technologies: ["Next.js", "Supabase", "Vercel", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Joseph Njogu Portfolio",
    description:
      "A personal brand website for a business architect, team building expert, and pastor with resources, media sections, and a content-ready structure.",
    image: "/projects/joseph-njogu.jpg",
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

      <article className="group rounded-md transition-all duration-200 hover:bg-[#112240]/60 hover:shadow-[0_18px_40px_rgba(2,12,27,0.35)] sm:p-5">
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

              <h4 className="mt-2 text-[21px] font-medium leading-snug text-[#e6f1ff] transition group-hover:text-[#64ffda]">
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
              className="group grid gap-5 rounded-md transition-all duration-200 hover:bg-[#112240]/60 hover:shadow-[0_18px_40px_rgba(2,12,27,0.35)] sm:grid-cols-[160px_1fr] sm:p-5"
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