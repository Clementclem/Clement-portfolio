import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-24">
      <h2 className="mb-8 text-[15px] font-bold uppercase tracking-[0.18em] text-[#e6f1ff] lg:hidden">
        About
      </h2>

      <div className="grid gap-10 lg:grid-cols-[1fr_180px] lg:items-start">
        <div className="space-y-6 text-[16px] leading-8 text-[#8892b0]">
          <p>
            I&apos;m a software engineer focused on building accessible,
            scalable, and user-friendly digital products using modern
            technologies.
          </p>

          <p>
            My primary toolkit includes{" "}
            <span className="text-[#ccd6f6]">
              Next.js, React, TypeScript, Tailwind CSS, Supabase, and Vercel
            </span>
            . I enjoy transforming ideas into polished, production-ready
            applications.
          </p>

          <p>
            Beyond software engineering, I&apos;m actively studying{" "}
            <span className="text-[#ccd6f6]">cybersecurity</span>, with
            interests in cloud security, secure systems, networking, and
            incident response.
          </p>

          <p>
            Currently, I&apos;m building ecommerce platforms, personal brands,
            admin dashboards, and digital systems while continuously improving
            my engineering and security skills.
          </p>
        </div>

        <div className="group relative mx-auto w-full max-w-[180px] lg:mx-0">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border border-[#64ffda] transition duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

          <div className="relative overflow-hidden rounded-lg bg-[#112240]">
            <Image
              src="/profile.jpg"
              alt="Clement Wanjihia"
              width={180}
              height={180}
              priority
              className="h-auto w-full grayscale transition duration-300 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}