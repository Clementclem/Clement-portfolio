const services = [
  {
    title: "Business Websites",
    description:
      "Modern, responsive websites designed to help businesses build trust, attract customers, and grow online.",
  },
  {
    title: "Ecommerce Development",
    description:
      "Custom online stores built with modern technologies, optimized for conversions, performance, and mobile shopping.",
  },
  {
    title: "Personal Brand Websites",
    description:
      "Professional websites for entrepreneurs, consultants, coaches, speakers, and personal brands.",
  },
  {
    title: "Web Application Development",
    description:
      "Custom React and Next.js applications with scalable architecture and modern user experiences.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16 lg:py-24">
      <h2 className="mb-8 text-[15px] font-bold uppercase tracking-[0.18em] text-[#e6f1ff] lg:hidden">
        Services
      </h2>

      <div className="space-y-5">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-[#233554] bg-[#112240]/40 p-6 transition hover:border-[#64ffda]/30"
          >
            <h3 className="text-[18px] font-medium text-[#e6f1ff]">
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