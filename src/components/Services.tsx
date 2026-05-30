const services = [
  {
    title: "Business Websites",
    description:
      "Modern, responsive websites for businesses that need a professional online presence, clear messaging, and a better way to convert visitors into customers.",
  },
  {
    title: "Ecommerce Development",
    description:
      "Online stores built for product discovery, mobile shopping, SEO, and smooth customer journeys from browsing to checkout.",
  },
  {
    title: "Personal Brand Websites",
    description:
      "Clean, polished websites for founders, consultants, speakers, coaches, pastors, and public-facing professionals.",
  },
  {
    title: "Web Application Development",
    description:
      "Custom React and Next.js applications with scalable structure, clean interfaces, and practical business functionality.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16 lg:py-24">
      <h2 className="mb-8 text-[15px] font-bold uppercase tracking-[0.18em] text-[#e6f1ff] lg:hidden">
        Services
      </h2>

      <div className="mb-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#64ffda]">
          What I Can Help With
        </p>

        <h3 className="mt-3 text-[28px] font-normal tracking-[-0.03em] text-[#e6f1ff]">
          Services
        </h3>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-xl border border-[#233554] bg-[#112240]/40 p-5 transition-all duration-300 hover:border-[#64ffda]/30 hover:bg-[#112240]/60 sm:p-6"
          >
            <h3 className="text-[18px] font-medium text-[#e6f1ff] transition group-hover:text-[#64ffda]">
              {service.title}
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-[#8892b0]">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}